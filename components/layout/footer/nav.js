import Link from 'next/link';
import Socials from './socials';

const firstColumnLinks = [
	{ name: 'Locations', href: 'https://www.itri.living/' },
	{ name: 'Spaces', href: 'https://www.itri.living/' },
	{ name: 'Community', href: 'https://www.itri.living/' },
	{ name: 'Benefits', href: 'https://www.itri.living/' },
];

const secondColumnLinks = [
	{ name: 'About Us', href: 'https://www.itri.living/' },
	{ name: 'Values', href: 'https://www.itri.living/' },
	{ name: 'Press', href: 'https://www.itri.living/' },
	{ name: 'Sustainability', href: 'https://www.itri.living/' },
	{ name: 'Real Estate Partners', href: 'https://www.itri.living/' },
	{ name: 'Code of Conduct', href: 'https://www.itri.living/' },
	{ name: 'Privacy Policy', href: 'https://www.itri.living/' },
	{ name: 'Terms & Conditions', href: 'https://www.itri.living/' },
];

const thirdColumnLinks = [
	{ name: 'Contact Us', href: 'https://www.itri.living/' },
	{ name: 'ITRI Guides', href: 'https://www.itri.living/' },
	{ name: 'FAQ', href: 'https://www.itri.living/' },
];

export default function Nav() {
	return (
		<nav className="w-full">
			<div className="flex flex-col gap-10 items-center md:items-start md:gap-y-10 ld:gap-y-0 md:grid md:grid-cols-2 lg:grid-cols-4">
				<div className="flex flex-col items-center md:items-start">
					<h4 className="font-medium text-lg mb-4">PRODUCT</h4>
					<ul className="flex flex-col gap-1 pl-0 text-white/85 items-center md:items-start">
						{firstColumnLinks.map((link) => (
							<li
								key={link.name}
								className="hover:text-white transition-color"
							>
								<Link
									className="text-inherit no-underline"
									href={link.href}
									target="_blank"
								>
									{link.name}
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div className="flex flex-col items-center md:items-start">
					<h4 className="font-medium text-lg mb-4">COMPANY</h4>
					<ul className="flex flex-col gap-1 pl-0  text-white/85 items-center md:items-start">
						{secondColumnLinks.map((link) => (
							<li
								key={link.name}
								className="hover:text-white transition-color"
							>
								<Link
									className="text-inherit no-underline"
									href={link.href}
									target="_blank"
								>
									{link.name}
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div className="flex flex-col items-center md:items-start">
					<h4 className="font-medium text-lg mb-4">SUPPORT</h4>
					<ul className="pl-0 flex flex-col gap-1 text-white/85 items-center md:items-start">
						{thirdColumnLinks.map((link) => (
							<li
								key={link.name}
								className="hover:text-white transition-color"
							>
								<Link
									className="text-inherit no-underline"
									href={link.href}
									target="_blank"
								>
									{link.name}
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div className="flex flex-col items-center md:items-start">
					<h4 className="font-medium text-lg mb-4">SOCIAL</h4>
					<Socials />
				</div>
			</div>
		</nav>
	);
}
