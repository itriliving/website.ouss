import Link from 'next/link';
import Socials from './socials';
import { useTranslation } from '../../../contexts/TranslationContext';

export default function Nav() {
	const { t } = useTranslation();

	const sections = {
		product: [
			{
				name: t('footer.sections.product.links.locations'),
				href: 'https://www.itri.living/',
			},
			{
				name: t('footer.sections.product.links.spaces'),
				href: 'https://www.itri.living/',
			},
			{
				name: t('footer.sections.product.links.community'),
				href: 'https://www.itri.living/',
			},
			{
				name: t('footer.sections.product.links.benefits'),
				href: 'https://www.itri.living/',
			},
		],
		company: [
			{
				name: t('footer.sections.company.links.about'),
				href: 'https://www.itri.living/',
			},
			{
				name: t('footer.sections.company.links.values'),
				href: 'https://www.itri.living/',
			},
			{
				name: t('footer.sections.company.links.press'),
				href: 'https://www.itri.living/',
			},
			{
				name: t('footer.sections.company.links.sustainability'),
				href: 'https://www.itri.living/',
			},
			{
				name: t('footer.sections.company.links.partners'),
				href: 'https://www.itri.living/',
			},
			{
				name: t('footer.sections.company.links.conduct'),
				href: 'https://www.itri.living/',
			},
			{
				name: t('footer.sections.company.links.privacy'),
				href: 'https://www.itri.living/',
			},
			{
				name: t('footer.sections.company.links.terms'),
				href: 'https://www.itri.living/',
			},
		],
		support: [
			{
				name: t('footer.sections.support.links.contact'),
				href: 'https://www.itri.living/',
			},
			{
				name: t('footer.sections.support.links.guides'),
				href: 'https://www.itri.living/',
			},
			{
				name: t('footer.sections.support.links.faq'),
				href: 'https://www.itri.living/',
			},
		],
	};

	return (
		<nav className="w-full">
			<div className="flex flex-col gap-10 items-center md:items-start md:gap-y-10 ld:gap-y-0 sm:grid md:grid-cols-2 lg:grid-cols-4">
				<div className="flex flex-col items-center md:items-start">
					<h4 className="font-medium text-lg mb-4">
						{t('footer.sections.product.title')}
					</h4>
					<ul className="flex flex-col gap-1 pl-0 text-white/85 items-center md:items-start">
						{sections.product.map((link) => (
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
					<h4 className="font-medium text-lg mb-4">
						{t('footer.sections.company.title')}
					</h4>
					<ul className="flex flex-col gap-1 pl-0  text-white/85 items-center md:items-start">
						{sections.company.map((link) => (
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
					<h4 className="font-medium text-lg mb-4">
						{t('footer.sections.support.title')}
					</h4>
					<ul className="pl-0 flex flex-col gap-1 text-white/85 items-center md:items-start">
						{sections.support.map((link) => (
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
					<h4 className="font-medium text-lg mb-4">
						{t('footer.sections.social.title')}
					</h4>
					<Socials />
				</div>
			</div>
		</nav>
	);
}
