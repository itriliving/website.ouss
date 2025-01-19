export async function connectWallet() {
	if (typeof window.ethereum !== 'undefined') {
		try {
			// Request account access
			const accounts = await window.ethereum.request({
				method: 'eth_requestAccounts',
			});

			// Return the first account
			return accounts[0];
		} catch (error) {
			if (error.code === 4001) {
				// User rejected request
				throw new Error('Please connect your MetaMask wallet');
			} else {
				console.error('Error connecting wallet:', error);
				throw new Error('Error connecting wallet');
			}
		}
	} else {
		window.open('https://metamask.io/download/', '_blank');
		throw new Error('Please install MetaMask');
	}
}

export function listenToAccountChanges(callback) {
	if (typeof window.ethereum !== 'undefined') {
		window.ethereum.on('accountsChanged', callback);
	}
}

export function listenToChainChanges(callback) {
	if (typeof window.ethereum !== 'undefined') {
		window.ethereum.on('chainChanged', callback);
	}
}
