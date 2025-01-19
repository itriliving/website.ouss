import { ArrowRight } from 'lucide-react';
import WhitelistButton from './WhitelistButton';
import { useTranslation } from '../../contexts/TranslationContext';

export default function HeroSection() {
	const { t } = useTranslation();

	return (
		<section className="py-12 sm:py-20">
			<div className="max-w-7xl mx-auto px-4">
				<div className="flex flex-col items-center text-center">
					{/* Main Heading */}
					<h1 className="max-w-6xl mb-6">
						<span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-dark-green-900 mb-4">
							{t('hero.title')}
						</span>
					</h1>

					{/* Subheading */}
					<div className="space-y-2 mb-10">
						<h2 className="text-2xl sm:text-3xl md:text-4xl text-dark-green-900/90">
							{t('hero.subheading1.text')}{' '}
							<span className="font-noto-serif-display italic">
								{t('hero.subheading1.highlight')}
							</span>
						</h2>
						<h2 className="text-2xl sm:text-3xl md:text-4xl text-dark-green-900/90">
							{t('hero.subheading2.text')}{' '}
							<span className="font-noto-serif-display italic">
								{t('hero.subheading2.highlight')}
							</span>
						</h2>
					</div>

					{/* Description */}
					<p className="max-w-2xl text-dark-green-900/70 text-base sm:text-lg leading-relaxed mb-10">
						{t('hero.description')}
					</p>

					{/* CTA Button */}
					<div className="relative">
						<WhitelistButton />
					</div>
				</div>
			</div>
		</section>
	);
}
