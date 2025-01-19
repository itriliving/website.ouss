import React from 'react';
import { useTranslation } from '../../contexts/TranslationContext';

export default function FaqSection() {
	const { t } = useTranslation();

	const faqs = t('faq.items', { returnObjects: true }) || [];

	return (
		<section className="py-12 sm:py-20 md:py-32 lg:py-40">
			<div className="max-w-7xl mx-auto px-4 pb-12">
				<h2 className="text-3xl sm:text-4xl md:text-5xl mb-16 text-dark-green-900 font-bold">
					{t('faq.title')}
				</h2>

				<div className="space-y-12">
					{Array.isArray(faqs) &&
						faqs.map((faq, index) => (
							<div
								key={index}
								className="flex gap-8 items-start group"
							>
								{/* Number */}
								<div className="flex-none">
									<span className="text-4xl sm:text-7xl font-noto-serif-display text-beige">
										{index + 1}
									</span>
								</div>

								{/* Content */}
								<div className="space-y-4 pt-2">
									<h3 className="text-xl font-bold text-dark-green-900">
										{faq.question}
									</h3>
									<p className="text-dark-green-900/70">
										{faq.answer}
									</p>
									<div className="h-px bg-dark-green-900/10 w-full" />
								</div>
							</div>
						))}
				</div>
			</div>
		</section>
	);
}
