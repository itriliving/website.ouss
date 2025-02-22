const fs = require('fs').promises;
const path = require('path');
const deepl = require('deepl-node');
require('dotenv').config();

const DEEPL_API_KEY = process.env.DEEPL_API_KEY;
const translator = new deepl.Translator(DEEPL_API_KEY);

const LANGUAGES = {
	de: 'DE',
	fr: 'FR',
};

async function translateLocales() {
	try {
		const enPath = path.join(process.cwd(), 'locales', 'en.json');
		const enContent = await fs.readFile(enPath, 'utf8');
		const enJson = JSON.parse(enContent);

		for (const [lang, deeplCode] of Object.entries(LANGUAGES)) {
			console.log(`Translating to ${lang}...`);

			const targetPath = path.join(
				process.cwd(),
				'locales',
				`${lang}.json`
			);
			let existingTranslations = {};
			try {
				const existingContent = await fs.readFile(targetPath, 'utf8');
				existingTranslations = JSON.parse(existingContent);
			} catch (error) {
				console.log(`No existing translations found for ${lang}`);
			}

			const newTranslations = await translateObject(
				enJson,
				existingTranslations,
				deeplCode
			);

			await fs.writeFile(
				targetPath,
				JSON.stringify(newTranslations, null, '\t'),
				'utf8'
			);

			console.log(`✓ ${lang}.json updated`);
		}
	} catch (error) {
		console.error('Translation failed:', error);
		process.exit(1);
	}
}

async function translateObject(sourceObj, targetObj, targetLang, prefix = '') {
	const result = { ...targetObj };

	for (const [key, value] of Object.entries(sourceObj)) {
		const fullKey = prefix ? `${prefix}.${key}` : key;

		// Skip if the key already exists in target and hasn't changed in source
		if (
			key in targetObj &&
			JSON.stringify(value) === JSON.stringify(targetObj[key])
		) {
			continue;
		}

		if (typeof value === 'object' && value !== null) {
			// Handle nested objects
			result[key] = await translateObject(
				value,
				targetObj[key] || {},
				targetLang,
				fullKey
			);
		} else if (typeof value === 'string' && value.trim() !== '') {
			try {
				// Only translate if the value has changed or doesn't exist
				if (!(key in targetObj) || targetObj[key] !== value) {
					console.log(`Translating: "${value}" to ${targetLang}`);
					const translatedText = await translator.translateText(
						value,
						null,
						targetLang
					);
					result[key] = translatedText.text;
					console.log(`Translated to: "${result[key]}"`);
				}
			} catch (error) {
				console.error(`Error translating "${fullKey}":`, error);
				result[key] = value;
			}
		} else {
			result[key] = value;
		}
	}

	return result;
}

translateLocales();
