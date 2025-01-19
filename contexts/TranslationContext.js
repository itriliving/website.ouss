import { createContext, useContext, useState, useEffect } from 'react';

const TranslationContext = createContext();

const loadTranslationFile = async (lang) => {
	try {
		const module = await import(`../locales/${lang}.json`);
		return module.default || module;
	} catch (error) {
		console.error(`Failed to load ${lang} translations:`, error);
		return null;
	}
};

function getBrowserLanguage() {
	if (typeof window === 'undefined') return 'en';

	const browserLang = navigator.language.split('-')[0];
	const supportedLanguages = ['en', 'fr', 'de'];

	return supportedLanguages.includes(browserLang) ? browserLang : 'en';
}

export function TranslationProvider({ children }) {
	const [lang, setLang] = useState('en');
	const [translations, setTranslations] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		// Load saved language preference or detect browser language
		if (typeof window !== 'undefined') {
			const savedLang =
				localStorage.getItem('language') || getBrowserLanguage();
			setLang(savedLang);
		}
	}, []);

	useEffect(() => {
		async function loadTranslations() {
			setIsLoading(true);
			const newTranslations = await loadTranslationFile(lang);
			if (newTranslations) {
				setTranslations(newTranslations);
				if (typeof window !== 'undefined') {
					localStorage.setItem('language', lang);
				}
			}
			setIsLoading(false);
		}

		loadTranslations();
	}, [lang]);

	const handleSetLang = (newLang) => {
		setLang(newLang);
		if (typeof window !== 'undefined') {
			localStorage.setItem('language', newLang);
		}
	};

	function t(key, params = {}) {
		if (!translations) return ''; // Return empty string if translations aren't loaded

		// Split the key by dots to access nested properties
		const keys = key.split('.');
		let value = translations;

		for (const k of keys) {
			value = value?.[k];
		}

		// Handle array returns for returnObjects option
		if (params.returnObjects && Array.isArray(value)) {
			return value;
		}

		// Handle string interpolation
		if (typeof value === 'string' && params) {
			Object.keys(params).forEach((key) => {
				value = value.replace(`{${key}}`, params[key]);
			});
		}

		return value || '';
	}

	if (isLoading) {
		return null; // Or a loading spinner component
	}

	return (
		<TranslationContext.Provider
			value={{ lang, setLang: handleSetLang, t }}
		>
			{children}
		</TranslationContext.Provider>
	);
}

export function useTranslation() {
	const context = useContext(TranslationContext);
	if (!context) {
		throw new Error(
			'useTranslation must be used within a TranslationProvider'
		);
	}
	return context;
}
