import FooterTop from './footer-top';
import Nav from './nav';
import Newsletter from './newsletter';
import Seperator from './seperator';
import Copyright from './copyright';

export default function Footer() {
	return (
		<footer className="bg-dark-green-900 text-white relative">
			<div className="max-w-6xl px-6 md:px-12 xl:px-0 mx-auto py-10 flex flex-col items-center gap-10">
				<FooterTop />
				<Seperator />
				<Nav />
				<Newsletter />
				<Seperator />
				<Copyright />
			</div>
		</footer>
	);
}
