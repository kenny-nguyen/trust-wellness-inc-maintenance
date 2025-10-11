import { useState } from 'react';
import { X } from 'lucide-react';

interface EbookPopupProps {
	isOpen: boolean;
	onClose: () => void;
}

export default function EbookPopup({ isOpen, onClose }: EbookPopupProps) {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [error, setError] = useState('');

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setError('');

		try {
			const { error: submitError } = await supabase
				.from('email_subscribers')
				.insert([{ name, email, source: 'ebook_popup' }]);

			if (submitError) {
				if (submitError.code === '23505') {
					setError('This email is already subscribed.');
				} else {
					throw submitError;
				}
			} else {
				setIsSuccess(true);
				setTimeout(() => {
					onClose();
					setIsSuccess(false);
					setName('');
					setEmail('');
				}, 2000);
			}
		} catch (err) {
			setError('Something went wrong. Please try again.');
			console.error(err);
		} finally {
			setIsSubmitting(false);
		}
	};

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center px-4 animate-fade-in">
			<div
				className="absolute inset-0 bg-black/60 backdrop-blur-sm"
				onClick={onClose}
			/>

			<div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 border-2 border-[#40E0D0] animate-slide-up">
				<button
					onClick={onClose}
					className="absolute top-4 right-4 text-gray-400 hover:text-black transition-colors"
				>
					<X size={24} />
				</button>

				{!isSuccess ? (
					<>
						<h2 className="text-2xl font-semibold text-black mb-3">
							Free Guide: Finding Balance Through Grief
						</h2>
						<p className="text-gray-600 mb-6 leading-relaxed">
							Discover emotional and nutritional steps to begin your healing
							journey.
						</p>

						<form
							onSubmit={handleSubmit}
							className="space-y-4"
						>
							<div>
								<label
									htmlFor="popup-name"
									className="block text-sm font-medium text-gray-700 mb-1"
								>
									Name
								</label>
								<input
									id="popup-name"
									type="text"
									value={name}
									onChange={(e) => setName(e.target.value)}
									className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#40E0D0] focus:border-transparent outline-none transition-all"
									placeholder="Your name"
								/>
							</div>

							<div>
								<label
									htmlFor="popup-email"
									className="block text-sm font-medium text-gray-700 mb-1"
								>
									Email *
								</label>
								<input
									id="popup-email"
									type="email"
									required
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#40E0D0] focus:border-transparent outline-none transition-all"
									placeholder="your@email.com"
								/>
							</div>

							{error && <p className="text-red-600 text-sm">{error}</p>}

							<button
								type="submit"
								disabled={isSubmitting}
								className="w-full bg-[#D4AF37] text-black py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-[#D4AF37]/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
							>
								{isSubmitting ? 'Sending...' : 'Download Now'}
							</button>
						</form>
					</>
				) : (
					<div className="text-center py-8">
						<div className="w-16 h-16 bg-[#40E0D0] rounded-full flex items-center justify-center mx-auto mb-4">
							<svg
								className="w-8 h-8 text-white"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M5 13l4 4L19 7"
								/>
							</svg>
						</div>
						<h3 className="text-xl font-semibold text-black mb-2">
							Thank You!
						</h3>
						<p className="text-gray-600">
							Your guide will be sent to your email shortly.
						</p>
					</div>
				)}
			</div>
		</div>
	);
}
