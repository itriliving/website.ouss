import { X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTranslation } from '../../contexts/TranslationContext';

export default function WhitelistModal({ isOpen, setIsOpen }) {
	if (!isOpen) return null;

	const [formData, setFormData] = useState({
		referralWallet: '',
		yourWallet: '',
	});
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');
	const [success, setSuccess] = useState(false);
	const [countdown, setCountdown] = useState(3);
	const { t } = useTranslation();

	// Handle countdown timer
	useEffect(() => {
		let timer;
		if (success) {
			timer = setInterval(() => {
				setCountdown((prev) => {
					if (prev <= 1) {
						clearInterval(timer);
						setIsOpen(false);
						return 3; // Reset for next time
					}
					return prev - 1;
				});
			}, 1000);
		}
		return () => {
			clearInterval(timer);
			setCountdown(3); // Reset on cleanup
		};
	}, [success, setIsOpen]);

	function handleChange(e) {
		setFormData({
			...formData,
			[e.target.id]: e.target.value,
		});
	}

	async function handleSubmit(e) {
		e.preventDefault();
		setIsLoading(true);
		setError('');
		setSuccess(false);
		setCountdown(3);

		try {
			const response = await fetch('/api/whitelist', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});

			const data = await response.json();

			if (!response.ok) {
				throw new Error(
					data.details || data.message || 'Something went wrong'
				);
			}

			// Success
			setSuccess(true);
			setFormData({
				referralWallet: '',
				yourWallet: '',
			});
		} catch (error) {
			setError(error.message);
			setSuccess(false);
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center">
			<div
				className="fixed inset-0 bg-black/50 backdrop-blur-sm"
				onClick={() => setIsOpen(false)}
			/>

			<div
				className="bg-white rounded-lg w-full max-w-md p-8 relative z-10 m-4"
				onClick={(e) => e.stopPropagation()}
			>
				<button
					onClick={() => setIsOpen(false)}
					className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 transition-colors"
				>
					<X className="h-5 w-5" />
				</button>

				<h2 className="text-2xl font-semibold text-gray-900 mb-16">
					{t('whitelist.modal.title')}
				</h2>

				{error && (
					<div className="mb-4 p-3 bg-red-50 text-red-600 rounded-md text-sm">
						{error}
					</div>
				)}

				{success && (
					<div className="mb-4 p-3 bg-green-50 text-green-600 rounded-md text-sm">
						{t('whitelist.modal.success', {
							seconds: countdown.toString(),
						})}
					</div>
				)}

				<form onSubmit={handleSubmit} className="space-y-6 text-start">
					<div className="space-y-2">
						<label
							htmlFor="referralWallet"
							className="block text-sm font-medium text-gray-700"
						>
							{t('whitelist.modal.referralWallet')}
						</label>
						<input
							type="text"
							id="referralWallet"
							value={formData.referralWallet}
							onChange={handleChange}
							className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-dark-green-900 focus:border-transparent outline-none transition-shadow"
							placeholder={t('whitelist.modal.enterReferral')}
							disabled={isLoading || success}
						/>
					</div>

					<div className="space-y-2">
						<label
							htmlFor="yourWallet"
							className="block text-sm font-medium text-gray-700"
						>
							{t('whitelist.modal.yourWallet')}
						</label>
						<input
							type="text"
							id="yourWallet"
							value={formData.yourWallet}
							onChange={handleChange}
							className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-dark-green-900 focus:border-transparent outline-none transition-shadow"
							placeholder={t('whitelist.modal.enterYourWallet')}
							disabled={isLoading || success}
						/>
					</div>

					<div className="flex gap-4 pt-4">
						<button
							type="button"
							onClick={() => setIsOpen(false)}
							disabled={isLoading}
							className="flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors duration-300 disabled:opacity-50"
						>
							{t('whitelist.modal.cancel')}
						</button>
						<button
							type="submit"
							disabled={isLoading || success}
							className="flex-1 px-4 py-2.5 bg-dark-green-900 text-white rounded-md hover:bg-dark-green-900/90 transition-colors duration-300 disabled:opacity-50"
						>
							{isLoading
								? t('whitelist.modal.submitting')
								: success
								? t('whitelist.modal.submitted')
								: t('whitelist.modal.confirm')}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
