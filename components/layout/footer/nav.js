import Link from 'next/link';
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
		social: [
			{
				name: 'Facebook',
				href: 'https://facebook.com',
			},
			{
				name: 'Twitter',
				href: 'https://twitter.com',
			},
			{
				name: 'Instagram',
				href: 'https://instagram.com',
			},
			{
				name: 'LinkedIn',
				href: 'https://linkedin.com',
			},
			{
				name: 'YouTube',
				href: 'https://youtube.com',
			},
		],
	};

	return (
		<nav className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-8">
			{Object.entries(sections).map(([key, links]) => (
				<div key={key}>
					<h4 className="text-sm font-semibold uppercase tracking-wider text-white/90 mb-6">
						{t(`footer.sections.${key}.title`)}
					</h4>
					<ul className="pl-0 space-y-2">
						{links.map((link) => (
							<li key={link.name}>
								<Link
									href={link.href}
									target="_blank"
									className="no-underline text-white/70 hover:text-white transition-colors text-sm"
								>
									{link.name}
								</Link>
							</li>
						))}
					</ul>
				</div>
			))}
		</nav>
	);
}
