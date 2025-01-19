import React from 'react';
import Logo from './logo';
import Button from '../../ui/button';
import Link from 'next/link';
import UserMenu from './UserMenu';
import { ShoppingCart } from 'lucide-react';
import LanguageMenu from './LanguageMenu';
import { useTranslation } from '../../../contexts/TranslationContext';
import { useWallet } from '../../../contexts/WalletContext';
import { useRouter } from 'next/router';

export default function Header() {
	const router = useRouter();
	const { account, isConnecting, error, connect } = useWallet();
	const { t } = useTranslation();

	const handleWalletClick = async () => {
		if (account) {
			router.push('/wallet');
		} else {
			await connect();
		}
	};

	return (
		<header className="text-sm">
			<div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-4">
				<Link href={'/'}>
					<Logo />
				</Link>
				<nav className="flex items-center gap-3 md:gap-4">
					<div className="flex gap-4 items-center">
						<div className="flex gap-3">
							<div className="">
								<LanguageMenu />
							</div>
							<button
								aria-label={t('header.cart')}
								className="hidden md:block bg-white rounded-full p-[10px] text-dark-green-900 shadow-sm hover:text-dark-green-900 transition-colors"
							>
								<ShoppingCart size={20} />
							</button>
						</div>
						<div className="hidden md:flex gap-3">
							<Link
								href={
									'https://calendly.com/admin-itri/itri-living-concept-explained'
								}
								target="_blank"
							>
								<Button>{t('header.requestCall')}</Button>
							</Link>

							<Button
								variant="secondary"
								onClick={handleWalletClick}
								disabled={isConnecting}
							>
								{account
									? `${account.slice(0, 6)}...${account.slice(
											-4
									  )}`
									: isConnecting
									? t('header.connecting')
									: t('header.connectWallet')}
							</Button>
						</div>
					</div>
					<UserMenu />
				</nav>
			</div>
		</header>
	);
}
