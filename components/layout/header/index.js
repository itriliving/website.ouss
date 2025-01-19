import React from 'react';
import Logo from './logo';
import Button from '../../ui/button';
import Link from 'next/link';
import UserMenu from './UserMenu';
import { ShoppingCart } from 'lucide-react';
import LanguageMenu from './LanguageMenu';
import { useTranslation } from '../../../contexts/TranslationContext';

export default function Header() {
	const { t } = useTranslation();

	return (
		<header className="text-sm">
			<div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-4">
				<Link href={'/'}>
					<Logo />
				</Link>
				<nav className="flex items-center gap-4">
					<div className="hidden sm:flex gap-4 items-center">
						<LanguageMenu />
						<button
							aria-label={t('header.cart')}
							className="bg-white rounded-full p-[10px] text-dark-green-900 shadow-sm hover:text-dark-green-900 transition-colors"
						>
							<ShoppingCart size={20} />
						</button>
						<Link
							href={
								'https://calendly.com/admin-itri/itri-living-concept-explained'
							}
							target="_blank"
						>
							<Button>{t('header.requestCall')}</Button>
						</Link>
						<Link href={'/'}>
							<Button variant="secondary">
								{t('header.connectWallet')}
							</Button>
						</Link>
					</div>
					<UserMenu />
				</nav>
			</div>
		</header>
	);
}
