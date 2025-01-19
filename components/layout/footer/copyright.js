import React from 'react';
import { useTranslation } from '../../../contexts/TranslationContext';

export default function Copyright() {
	const { t } = useTranslation();

	return (
		<div>
			<p>{t('footer.copyright')}</p>
		</div>
	);
}
