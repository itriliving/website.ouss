import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import WhitelistModal from './WhitelistModal';
import { useTranslation } from '../../contexts/TranslationContext';

export default function WhitelistButton() {
	const [isOpen, setIsOpen] = useState(false);
	const { t } = useTranslation();

	return (
		<>
			<button
				onClick={() => setIsOpen(true)}
				className="font-medium px-4 py-2 rounded-full hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed group flex gap-1 items-center bg-dark-green-900 text-white"
				aria-label={t('whitelist.button.aria')}
			>
				<span>{t('whitelist.button.text')}</span>
				<ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
			</button>
			<WhitelistModal isOpen={isOpen} setIsOpen={setIsOpen} />
		</>
	);
}
