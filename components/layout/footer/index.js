import FooterTop from './footer-top';
import Nav from './nav';
import Newsletter from './newsletter';
import Seperator from './seperator';
import Copyright from './copyright';
import Socials from './socials';

export default function Footer() {
	return (
		<footer className="bg-dark-green-900 text-white relative">
			<div className="max-w-7xl mx-auto px-6 py-16 sm:py-24">
				{/* Top Section */}
				<div className="flex flex-col items-center text-center mb-16">
					<FooterTop />
					<Newsletter />
				</div>

				{/* Navigation Grid */}
				<div className="border-t border-white/10 pt-16 pb-8">
					<Nav />
				</div>

				{/* Bottom Section */}
				<div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-white/10 gap-4">
					<Copyright />
					<Socials />
				</div>
			</div>
		</footer>
	);
}
