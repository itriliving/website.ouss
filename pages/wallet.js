import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useWallet } from '../contexts/WalletContext';
import { useTranslation } from '../contexts/TranslationContext';
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';
import { Copy, ExternalLink, LogOut } from 'lucide-react';

export default function WalletPage() {
	const router = useRouter();
	const { account, isConnecting, disconnect } = useWallet();
	const { t } = useTranslation();

	// Redirect if not connected
	useEffect(() => {
		if (!account && !isConnecting) {
			router.push('/mint');
		}
	}, [account, isConnecting, router]);

	// Show loading state while checking connection or redirecting
	if (!account || isConnecting) {
		return (
			<div className="min-h-screen bg-gradient-to-b from-white to-azure/30">
				<Header />
				<main className="max-w-7xl mx-auto px-4 py-12 sm:py-20">
					<div className="flex items-center justify-center">
						<div className="animate-pulse text-dark-green-900/70">
							{t('common.loading')}
						</div>
					</div>
				</main>
				<Footer />
			</div>
		);
	}

	const handleDisconnect = async () => {
		await disconnect();
		router.push('/mint');
	};

	const handleCopyAddress = () => {
		navigator.clipboard.writeText(account);
	};

	const handleViewOnEtherscan = () => {
		window.open(`https://etherscan.io/address/${account}`, '_blank');
	};

	return (
		<div className="min-h-screen bg-gradient-to-b from-white to-azure/30">
			<Header />
			<main className="max-w-7xl mx-auto px-4 py-12 sm:py-20">
				{/* Wallet Card */}
				<div className="bg-white rounded-2xl shadow-sm border border-dark-green-900/5">
					{/* Header Section */}
					<div className="p-6 sm:p-8 border-b border-dark-green-900/5">
						<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
							<h1 className="text-2xl sm:text-3xl font-bold text-dark-green-900">
								{t('wallet.title')}
							</h1>
							<button
								onClick={handleDisconnect}
								className="flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:text-red-700 transition-colors rounded-lg hover:bg-red-50"
							>
								<LogOut size={16} />
								{t('wallet.disconnect')}
							</button>
						</div>
					</div>

					{/* Wallet Info */}
					<div className="p-6 sm:p-8 space-y-8">
						{/* Connected Account */}
						<div className="space-y-3">
							<h2 className="text-lg font-semibold text-dark-green-900">
								{t('wallet.connectedAccount')}
							</h2>
							<div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
								<code className="px-4 py-2 bg-dark-green-900/5 rounded-lg text-dark-green-900/70 font-mono text-sm">
									{account}
								</code>
								<div className="flex items-center gap-2">
									<button
										onClick={handleCopyAddress}
										className="flex items-center gap-2 px-3 py-1.5 text-sm text-dark-green-900/70 hover:text-dark-green-900 transition-colors rounded-lg hover:bg-dark-green-900/5"
									>
										<Copy size={14} />
										{t('wallet.copy')}
									</button>
									<button
										onClick={handleViewOnEtherscan}
										className="flex items-center gap-2 px-3 py-1.5 text-sm text-dark-green-900/70 hover:text-dark-green-900 transition-colors rounded-lg hover:bg-dark-green-900/5"
									>
										<ExternalLink size={14} />
										{t('wallet.viewOnEtherscan')}
									</button>
								</div>
							</div>
						</div>

						{/* Network Info */}
						<div className="space-y-3">
							<h2 className="text-lg font-semibold text-dark-green-900">
								{t('wallet.network')}
							</h2>
							<div className="flex items-center gap-2">
								<div className="w-2.5 h-2.5 rounded-full bg-green-500" />
								<p className="text-dark-green-900/70">
									Ethereum Mainnet
								</p>
							</div>
						</div>

						{/* Balance */}
						<div className="space-y-3">
							<h2 className="text-lg font-semibold text-dark-green-900">
								{t('wallet.balance')}
							</h2>
							<div className="flex items-baseline gap-2">
								<span className="text-2xl font-medium text-dark-green-900">
									0.00
								</span>
								<span className="text-dark-green-900/70">
									ETH
								</span>
							</div>
						</div>

						{/* NFTs */}
						<div className="space-y-3">
							<h2 className="text-lg font-semibold text-dark-green-900">
								{t('wallet.nfts')}
							</h2>
							<div className="bg-dark-green-900/5 rounded-xl p-8 text-center">
								<p className="text-dark-green-900/70">
									{t('wallet.noNFTs')}
								</p>
							</div>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}
