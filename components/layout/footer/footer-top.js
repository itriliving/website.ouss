import Logo from './logo';
import { useTranslation } from '../../../contexts/TranslationContext';

export default function FooterTop() {
	const { t } = useTranslation();

	return (
		<div className="flex flex-col items-center gap-6">
			<Logo />
			<p className="max-w-96 text-center">{t('footer.discover')}</p>
		</div>
	);
}
