import { createContext, useContext, useState, useEffect } from 'react';
import {
	connectWallet,
	listenToAccountChanges,
	listenToChainChanges,
} from '../utils/wallet';

const WalletContext = createContext();

export function WalletProvider({ children }) {
	const [account, setAccount] = useState(null);
	const [isConnecting, setIsConnecting] = useState(true);
	const [error, setError] = useState(null);
	const [provider, setProvider] = useState(null);
	const [web3Modal, setWeb3Modal] = useState(null);

	useEffect(() => {
		async function checkConnection() {
			try {
				// Check if user was previously connected
				const wasConnected =
					localStorage.getItem('walletConnected') === 'true';

				if (!wasConnected) {
					setIsConnecting(false);
					return;
				}

				if (typeof window.ethereum !== 'undefined') {
					const accounts = await window.ethereum.request({
						method: 'eth_accounts',
					});

					if (accounts.length > 0) {
						setAccount(accounts[0]);
					} else {
						// If no accounts found, clear the connected state
						localStorage.removeItem('walletConnected');
					}
				}
			} catch (err) {
				console.error('Error checking wallet connection:', err);
				setError(err.message);
				localStorage.removeItem('walletConnected');
			} finally {
				setIsConnecting(false);
			}
		}

		checkConnection();

		listenToAccountChanges((accounts) => {
			setAccount(accounts[0] || null);
		});

		listenToChainChanges(() => {
			window.location.reload();
		});

		return () => {
			if (typeof window.ethereum !== 'undefined') {
				window.ethereum.removeListener('accountsChanged', setAccount);
				window.ethereum.removeListener('chainChanged', () => {});
			}
		};
	}, []);

	const handleConnect = async () => {
		try {
			setIsConnecting(true);
			setError(null);
			const userAccount = await connectWallet();
			setAccount(userAccount);
			localStorage.setItem('walletConnected', 'true');
		} catch (err) {
			setError(err.message);
		} finally {
			setIsConnecting(false);
		}
	};

	const disconnect = async () => {
		try {
			// Disconnect from the provider if it exists
			if (provider?.disconnect) {
				await provider.disconnect();
			}

			// Clear all connection states
			localStorage.removeItem('walletConnected');
			localStorage.removeItem('walletconnect');
			localStorage.removeItem('wagmi.connected');
			localStorage.removeItem('wagmi.wallet');

			// Reset the state
			setAccount(null);
			setProvider(null);
			setIsConnecting(false);

			// If using Web3Modal, clear its cache
			if (web3Modal) {
				web3Modal.clearCachedProvider();
			}

			// Force disconnect from MetaMask if available
			if (window.ethereum?.disconnect) {
				await window.ethereum.disconnect();
			}
		} catch (error) {
			console.error('Error disconnecting wallet:', error);
		}
	};

	return (
		<WalletContext.Provider
			value={{
				account,
				isConnecting,
				error,
				connect: handleConnect,
				disconnect: disconnect,
			}}
		>
			{children}
		</WalletContext.Provider>
	);
}

export function useWallet() {
	const context = useContext(WalletContext);
	if (!context) {
		throw new Error('useWallet must be used within a WalletProvider');
	}
	return context;
}
