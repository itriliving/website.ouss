import { ArrowRight } from 'lucide-react';
import WhitelistButton from './WhitelistButton';
import { useTranslation } from '../../contexts/TranslationContext';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import clsx from 'clsx';

export default function HeroSection() {
	const { t } = useTranslation();
	const router = useRouter();
	const [isHighlighted, setIsHighlighted] = useState(false);

	useEffect(() => {
		if (router.query.highlight === 'hero') {
			// Add highlight effect
			setIsHighlighted(true);

			// Remove highlight after animation
			const timer = setTimeout(() => {
				setIsHighlighted(false);
				// Remove the query parameter
				router.replace(
					{
						pathname: router.pathname,
						query: { ...router.query, highlight: undefined },
					},
					undefined,
					{ shallow: true }
				);
			}, 2000); // Duration of highlight effect

			return () => clearTimeout(timer);
		}
	}, [router.query.highlight]);

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
						<WhitelistButton isHighlighted={isHighlighted} />
					</div>
				</div>
			</div>
		</section>
	);
}
