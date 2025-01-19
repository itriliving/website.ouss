import React from 'react';
import { useTranslation } from '../../../contexts/TranslationContext';

export default function Copyright() {
	const { t } = useTranslation();

	return (
		<p className="mb-0 text-sm text-white/60">{t('footer.copyright')}</p>
	);
}
