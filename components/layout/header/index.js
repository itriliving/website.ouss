import React from 'react';
import Logo from './logo';
import Button from '../../ui/button';
import Link from 'next/link';
import { Globe, ShoppingCart, User, Menu } from 'lucide-react';

export default function Header() {
	return (
		<header className="text-sm bg-azure">
			<div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-4">
				<Link href={'/'}>
					<Logo />
				</Link>
				<nav className="flex items-center gap-4">
					<div className="hidden sm:flex gap-4 items-center">
						<button>
							<Globe size={20} />
						</button>
						<button>
							<ShoppingCart size={20} />
						</button>
						<Link
							href={
								'https://calendly.com/admin-itri/itri-living-concept-explained'
							}
							target="_blank"
						>
							<Button>Request a Call</Button>
						</Link>
						<Link href={'/'}>
							<Button>Connect Your Wallet</Button>
						</Link>
					</div>
					<div className="flex items-center gap-2 border border-black p-2 rounded-full">
						<button className="flex items-center justify-center">
							<User size={20} />
						</button>
						<button className="flex items-center justify-center">
							<Menu size={20} />
						</button>
					</div>
				</nav>
			</div>
		</header>
	);
}
