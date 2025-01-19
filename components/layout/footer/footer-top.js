import Logo from './logo';
import { useTranslation } from '../../../contexts/TranslationContext';

export default function FooterTop() {
	const { t } = useTranslation();

	return (
		<div className="flex flex-col items-center gap-8 max-w-2xl mx-auto">
			<Logo />
			<p className="text-lg text-white/80 leading-relaxed">
				{t('footer.discover')}
			</p>
		</div>
	);
}
