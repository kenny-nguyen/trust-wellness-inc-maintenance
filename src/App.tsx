import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import EbookSection from './components/EbookSection';
import TestimonialSection from './components/TestimonialSection';
import ResourcesSection from './components/ResourcesSection';
import ContactSection from './components/ContactSection';
import EbookPopup from './components/EbookPopup';
import { MaintenancePage } from './components/MaintenancePage';
import { usePopupTrigger } from './hooks/usePopupTrigger';

function App() {
	const { shouldShow, setShouldShow } = usePopupTrigger(10000, 40);
	const [isPopupOpen, setIsPopupOpen] = useState(false);
	const [isMaintenanceMode, setIsMaintenanceMode] = useState(true);
	const [maintenanceData, setMaintenanceData] = useState<{
		message: string;
		estimatedEndTime?: string;
		previewPassword: string;
	} | null>(null);
	const [isPreviewUnlocked, setIsPreviewUnlocked] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const handlePreviewUnlock = async (password: string) => {
		if (maintenanceData && password === maintenanceData.previewPassword) {
			setIsPreviewUnlocked(true);
		} else {
			throw new Error('Incorrect password');
		}
	};

	const handleBookNowClick = () => {
		const contactSection = document.getElementById('contact');
		if (contactSection) {
			contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	};

	const handleEbookClick = () => {
		setIsPopupOpen(true);
	};

	const handleClosePopup = () => {
		setIsPopupOpen(false);
		setShouldShow(false);
	};

	if (shouldShow && !isPopupOpen) {
		setIsPopupOpen(true);
	}

	if (isLoading) {
		return (
			<div className="min-h-screen bg-slate-900 flex items-center justify-center">
				<div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
			</div>
		);
	}

	if (isMaintenanceMode && !isPreviewUnlocked) {
		return (
			<MaintenancePage
				message={
					maintenanceData?.message ||
					'We are currently performing scheduled maintenance.'
				}
				estimatedEndTime={maintenanceData?.estimatedEndTime}
				onPreviewUnlock={handlePreviewUnlock}
			/>
		);
	}

	return (
		<div className="min-h-screen bg-white">
			<Header onBookNowClick={handleBookNowClick} />

			<main>
				<HeroSection
					onBookNowClick={handleBookNowClick}
					onEbookClick={handleEbookClick}
				/>
				<AboutSection />
				<ServicesSection onBookNowClick={handleBookNowClick} />
				<EbookSection onEbookClick={handleEbookClick} />
				<TestimonialSection />
				<ResourcesSection onEbookClick={handleEbookClick} />
				<ContactSection />
			</main>

			<Footer />

			<EbookPopup
				isOpen={isPopupOpen}
				onClose={handleClosePopup}
			/>
		</div>
	);
}

export default App;
