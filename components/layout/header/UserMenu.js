import { Menu, User } from 'lucide-react';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { useTranslation } from '../../../contexts/TranslationContext';
import { useWallet } from '../../../contexts/WalletContext';
import { useRouter } from 'next/router';

export default function UserMenu() {
	const [isOpen, setIsOpen] = useState(false);
	const router = useRouter();
	const menuRef = useRef(null);
	const { t } = useTranslation();
	const { account, isConnecting, connect } = useWallet();

	useEffect(() => {
		function handleClickOutside(event) {
			if (menuRef.current && !menuRef.current.contains(event.target)) {
				setIsOpen(false);
			}
		}

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	const handleWalletClick = async () => {
		if (account) {
			router.push('/wallet');
		} else {
			await connect();
		}
		setIsOpen(false);
	};

	return (
		<div className="relative" ref={menuRef}>
			<div
				aria-label="User menu"
				onClick={() => setIsOpen(!isOpen)}
				className="flex items-center gap-2 p-2 rounded-full shadow-sm transition-colors cursor-pointer bg-white backdrop-blur-sm"
			>
				<button className="flex items-center justify-center text-dark-green-900/80 hover:text-dark-green-900 transition-colors">
					<User size={20} />
				</button>
				<button className="flex items-center justify-center text-dark-green-900/80 hover:text-dark-green-900 transition-colors">
					<Menu size={20} />
				</button>
			</div>

			{isOpen && (
				<div className="absolute right-0 mt-3 w-56 bg-white rounded-xl shadow-sm py-2">
					<div className="px-4 py-2 border-b border-dark-green-900/10">
						<p className="text-xs text-dark-green-900/60 mb-2">
							{t('header.welcomeTo')}
						</p>
						<h3 className="text-sm font-medium text-dark-green-900">
							ITRI Living
						</h3>
					</div>
					<div className="py-1">
						{/* Mobile Menu Items */}
						<div className="md:hidden border-b border-dark-green-900/10 mb-1 pb-1">
							<Link
								href="#"
								className="no-underline flex items-center px-4 py-2 text-sm text-dark-green-900/80 hover:text-dark-green-900 hover:bg-dark-green-900/5 transition-colors"
								onClick={() => setIsOpen(false)}
							>
								{t('header.cart')}
							</Link>
							<Link
								href="https://calendly.com/admin-itri/itri-living-concept-explained"
								target="_blank"
								className="no-underline flex items-center px-4 py-2 text-sm text-dark-green-900/80 hover:text-dark-green-900 hover:bg-dark-green-900/5 transition-colors"
								onClick={() => setIsOpen(false)}
							>
								{t('header.requestCall')}
							</Link>
						</div>
						{/* Account Links */}
						<button
							onClick={handleWalletClick}
							className="md:hidden w-full flex items-center px-4 py-2 text-sm text-dark-green-900/80 hover:text-dark-green-900 hover:bg-dark-green-900/5 transition-colors"
						>
							{account
								? `${account.slice(0, 6)}...${account.slice(
										-4
								  )}`
								: isConnecting
								? t('header.connecting')
								: t('header.connectWallet')}
						</button>
						<Link
							href="/SignIn"
							className="no-underline flex items-center px-4 py-2 text-sm text-dark-green-900/80 hover:text-dark-green-900 hover:bg-dark-green-900/5 transition-colors"
							onClick={() => setIsOpen(false)}
						>
							{t('header.signIn')}
						</Link>
						<Link
							href="/SignIn"
							className="no-underline flex items-center px-4 py-2 text-sm text-dark-green-900/80 hover:text-dark-green-900 hover:bg-dark-green-900/5 transition-colors"
							onClick={() => setIsOpen(false)}
						>
							{t('header.createAccount')}
						</Link>
					</div>
				</div>
			)}
		</div>
	);
}
