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

export function TranslationProvider({ children }) {
	const [lang, setLang] = useState('en');
	const [translations, setTranslations] = useState({});

	useEffect(() => {
		// Load saved language preference
		if (typeof window !== 'undefined') {
			const savedLang = localStorage.getItem('language') || 'en';
			setLang(savedLang);
		}
	}, []);

	useEffect(() => {
		async function loadTranslations() {
			const newTranslations = await loadTranslationFile(lang);
			if (newTranslations) {
				setTranslations(newTranslations);
				if (typeof window !== 'undefined') {
					localStorage.setItem('language', lang);
				}
			}
		}

		loadTranslations();
	}, [lang]);

	function t(key, params = {}) {
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

		return value || key;
	}

	return (
		<TranslationContext.Provider value={{ lang, setLang, t }}>
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
