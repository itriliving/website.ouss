import AboutSection from '../components/private-premint/about-section';
import DiscountSection from '../components/private-premint/discount-section';
import FaqSection from '../components/private-premint/faq-section';
import HeroSection from '../components/private-premint/hero-section';
import HowItWorksSection from '../components/private-premint/how-it-works-section';
import Header from '../components/layout/header';
import { PrivatePremintLayout } from '../components/layout/private-premint-layout';

export default function PrivatePremint() {
	return (
		<PrivatePremintLayout>
			<Header />
			<main className="private-premint">
				<HeroSection />
				<AboutSection />
				<HowItWorksSection />
				<DiscountSection />
				<FaqSection />
			</main>
		</PrivatePremintLayout>
	);
}

// Add getLayout method to override the default layout
PrivatePremint.getLayout = function getLayout(page) {
	return page;
};
