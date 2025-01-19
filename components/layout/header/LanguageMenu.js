import { Globe, Check } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useTranslation } from '../../../contexts/TranslationContext';

const languages = [
	{ code: 'en', name: 'English' },
	{ code: 'fr', name: 'Français' },
	{ code: 'de', name: 'Deutsch' },
];

export default function LanguageMenu() {
	const [isOpen, setIsOpen] = useState(false);
	const { lang, setLang, t } = useTranslation();
	const menuRef = useRef(null);

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

	function handleLanguageChange(langCode) {
		setLang(langCode);
		setIsOpen(false);
	}

	return (
		<div className="relative" ref={menuRef}>
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="flex items-center justify-center bg-white rounded-full p-[10px] shadow-sm text-dark-green-900/80 hover:text-dark-green-900 transition-alcolorsl"
				aria-label={t('header.selectLanguage')}
			>
				<Globe size={20} />
			</button>

			{isOpen && (
				<div className="absolute right-0 mt-3 w-40 bg-white rounded-xl shadow-sm py-2">
					<div className="px-4 py-2 border-b border-dark-green-900/10">
						<p className="text-xs text-dark-green-900/60">
							{t('header.selectLanguage')}
						</p>
					</div>
					<div className="py-1">
						{languages.map((language) => (
							<button
								key={language.code}
								onClick={() =>
									handleLanguageChange(language.code)
								}
								className="w-full flex items-center justify-between px-4 py-2 text-sm text-dark-green-900/80 hover:text-dark-green-900 hover:bg-dark-green-900/5 transition-colors"
							>
								{language.name}
								{lang === language.code && (
									<Check
										size={16}
										className="text-dark-green-900"
									/>
								)}
							</button>
						))}
					</div>
				</div>
			)}
		</div>
	);
}
