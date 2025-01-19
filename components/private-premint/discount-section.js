import { ArrowRight } from 'lucide-react';
import { useTranslation } from '../../contexts/TranslationContext';
import { useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';

export default function DiscountSection() {
	const { t } = useTranslation();
	const discountPercent = 40;
	const router = useRouter();

	const handleDiscountClick = useCallback(() => {
		// Add a query parameter to indicate highlight
		router.push(
			{
				pathname: router.pathname,
				query: { ...router.query, highlight: 'hero' },
			},
			undefined,
			{ shallow: true }
		);

		// Scroll to top smoothly
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}, [router]);

	return (
		<section className="bg-dark-green-900 py-16 sm:py-24 relative shadow-inner">
			{/* Background Pattern */}
			<div className="absolute inset-0 opacity-10">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-light-blue to-transparent" />
			</div>

			<div className="max-w-7xl mx-auto px-4 text-center relative">
				<div className="space-y-8">
					{/* Discount Badge */}
					<div className="inline-block">
						<div className="bg-light-blue/20 backdrop-blur-sm px-6 py-2 rounded-full">
							<p className="text-light-blue font-medium mb-0">
								{t('discount.badge')}
							</p>
						</div>
					</div>

					{/* Main Content */}
					<div className="flex flex-col items-center space-y-6">
						<h2 className="text-3xl sm:text-4xl md:text-5xl text-light-blue font-bold max-w-3xl mx-auto">
							{t('discount.title').replace(
								'{percent}',
								discountPercent
							)}
						</h2>

						<p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
							{t('discount.description')}
						</p>

						{/* CTA Button */}
						<div className="pt-4 mx-auto">
							<button
								onClick={handleDiscountClick}
								className="font-medium px-4 py-2 rounded-full hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed group flex gap-1 items-center bg-white hover:bg-white/90 shadow-lg text-dark-green-900"
							>
								<span>{t('discount.cta')}</span>
								<ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
