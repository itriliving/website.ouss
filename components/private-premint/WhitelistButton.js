import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import WhitelistModal from './WhitelistModal';
import { useTranslation } from '../../contexts/TranslationContext';
import clsx from 'clsx';

export default function WhitelistButton({ isHighlighted }) {
	const [isOpen, setIsOpen] = useState(false);
	const { t } = useTranslation();

	return (
		<>
			<button
				onClick={() => setIsOpen(true)}
				className={clsx(
					'group inline-flex items-center gap-2 px-4 py-2.5 text-lg font-medium text-white rounded-full bg-dark-green-900 hover:bg-dark-green-800 transition-all duration-300',
					isHighlighted &&
						'ring-4 ring-dark-green-500 ring-opacity-50'
				)}
				aria-label={t('whitelist.button.aria')}
			>
				<span>{t('whitelist.button.text')}</span>
				<ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
			</button>
			<WhitelistModal isOpen={isOpen} setIsOpen={setIsOpen} />
		</>
	);
}
