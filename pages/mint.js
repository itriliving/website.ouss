import Header from '../components/layout/header';
import Footer from '../components/layout/footer';
import HeroSection from '../components/private-premint/hero-section';
import AboutSection from '../components/private-premint/about-section';
import HowItWorksSection from '../components/private-premint/how-it-works-section';
import DiscountSection from '../components/private-premint/discount-section';
import FaqSection from '../components/private-premint/faq-section';
import AnimatedBackground from '../components/private-premint/AnimatedBackground';
import { useTranslation } from 'react-i18next';

export default function Mint() {
	const { t } = useTranslation();

	return (
		<div className="relative min-h-screen">
			<AnimatedBackground />
			<div className="relative z-10">
				{t && ( // Only render content when translations are available
					<>
						<Header />
						<main className="private-premint font-inter bg-transparent">
							<HeroSection />
							<AboutSection />
							<HowItWorksSection />
							<DiscountSection />
							<FaqSection />
						</main>
						<Footer />
					</>
				)}
			</div>
		</div>
	);
}

Mint.getLayout = function getLayout(page) {
	return page;
};
