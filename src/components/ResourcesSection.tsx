import { useState } from 'react';
import { BookOpen, Mail } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ResourcesSectionProps {
	onEbookClick: () => void;
}

export default function ResourcesSection({
	onEbookClick,
}: ResourcesSectionProps) {
	const ref = useScrollAnimation();
	const [email, setEmail] = useState('');
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [error, setError] = useState('');

	const handleNewsletterSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setError('');

		try {
			const { error: submitError } = await supabase
				.from('email_subscribers')
				.insert([{ email, source: 'newsletter' }]);

			if (submitError) {
				if (submitError.code === '23505') {
					setError('This email is already subscribed.');
				} else {
					throw submitError;
				}
			} else {
				setIsSuccess(true);
				setEmail('');
				setTimeout(() => setIsSuccess(false), 3000);
			}
		} catch (err) {
			setError('Something went wrong. Please try again.');
			console.error(err);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<section
			id="resources"
			className="py-20 bg-gray-50"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-3xl sm:text-4xl font-semibold text-black mb-4">
						Resources
					</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						Tools and insights to support your healing journey.
					</p>
				</div>

				<div
					ref={ref}
					className="space-y-8"
				>
					<div className="bg-white rounded-2xl p-8 sm:p-12 shadow-lg border border-gray-100">
						<div className="flex flex-col md:flex-row items-center gap-8">
							<div className="flex-shrink-0">
								<div className="w-24 h-24 bg-[#40E0D0] rounded-2xl flex items-center justify-center shadow-lg">
									<BookOpen
										size={48}
										className="text-white"
									/>
								</div>
							</div>

							<div className="flex-1 text-center md:text-left">
								<h3 className="text-2xl font-semibold text-black mb-3">
									Free Healing Guide
								</h3>
								<p className="text-gray-700 leading-relaxed mb-4">
									Download your free guide on finding balance through grief.
									Learn practical emotional and nutritional steps to support
									your healing journey.
								</p>
								<button
									onClick={onEbookClick}
									className="bg-[#D4AF37] text-black px-8 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-[#D4AF37]/30 transition-all"
								>
									Download Free Guide
								</button>
							</div>
						</div>
					</div>

					<div className="bg-gradient-to-br from-[#40E0D0]/10 to-[#D4AF37]/10 rounded-2xl p-8 sm:p-12 shadow-lg border border-[#40E0D0]/20">
						<div className="max-w-2xl mx-auto text-center">
							<div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
								<Mail
									size={32}
									className="text-[#40E0D0]"
								/>
							</div>

							<h3 className="text-2xl font-semibold text-black mb-3">
								Join My Newsletter
							</h3>
							<p className="text-gray-700 leading-relaxed mb-6">
								Receive reflections on healing and balance, along with practical
								wellness tips delivered to your inbox.
							</p>

							<form
								onSubmit={handleNewsletterSubmit}
								className="max-w-md mx-auto"
							>
								<div className="flex flex-col sm:flex-row gap-3">
									<input
										type="email"
										required
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										placeholder="your@email.com"
										className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-[#40E0D0] focus:border-transparent outline-none transition-all"
									/>
									<button
										type="submit"
										disabled={isSubmitting || isSuccess}
										className="bg-[#40E0D0] text-white px-8 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-[#40E0D0]/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
									>
										{isSuccess
											? 'Subscribed!'
											: isSubmitting
											? 'Joining...'
											: 'Subscribe'}
									</button>
								</div>
								{error && <p className="text-red-600 text-sm mt-2">{error}</p>}
								{isSuccess && (
									<p className="text-[#40E0D0] text-sm mt-2 font-medium">
										Thank you for subscribing!
									</p>
								)}
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
