import React from 'react';
import { useTranslation } from '../../contexts/TranslationContext';

export default function HowItWorksSection() {
	const { t } = useTranslation();
	const steps = t('howItWorks.steps', { returnObjects: true }) || [];

	return (
		<section className="pt-12 sm:pt-20 pb-24 sm:pb-40">
			<div className="max-w-7xl mx-auto px-4">
				<h2 className="text-3xl sm:text-4xl md:text-5xl mb-12 text-dark-green-900 font-bold">
					{t('howItWorks.title')}{' '}
					<span className="italic">works</span>
				</h2>

				<div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
					{/* Main Content */}
					<div className="flex-1">
						<ol className="relative space-y-12">
							{Array.isArray(steps) &&
								steps.map((step, index) => (
									<li key={index} className="relative pl-12">
										<div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-dark-green-900 text-white font-bold">
											{index + 1}
										</div>
										<div className="space-y-3">
											<h3 className="text-xl font-bold text-dark-green-900">
												{step.title}
											</h3>
											{step.bullets ? (
												<ul className="space-y-2 pl-0 text-dark-green-900/80">
													{step.bullets.map(
														(bullet, i) => (
															<li
																key={i}
																className="flex items-start gap-2"
															>
																<span className="mt-2 h-1 w-1 rounded-full bg-dark-green-900/80 shrink-0" />
																<p className="text-sm sm:text-base">
																	{bullet}
																</p>
															</li>
														)
													)}
												</ul>
											) : (
												<p className="text-sm sm:text-base text-dark-green-900/80">
													{step.description}
												</p>
											)}
										</div>
									</li>
								))}
						</ol>
					</div>

					{/* Important Dates */}
					<div className="flex-1 relative">
						<div className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden">
							<div className="absolute inset-0 bg-white/20" />
							<div className="absolute inset-0 backdrop-blur-xl" />
						</div>
						<div className="relative z-20 px-8 py-10  rounded-3xl space-y-6 shadow-[100px_20px_1000px_rgba(13,118,118,0.4)]">
							<h3 className="text-xl font-bold text-dark-green-900 italic">
								{t('howItWorks.importantDates.title')}
							</h3>
							<ul className="space-y-4 pl-0">
								<li className="flex items-center gap-3 text-dark-green-900">
									<span className="h-1.5 w-1.5 rounded-full bg-dark-green-900" />
									<span className="font-medium">
										{t(
											'howItWorks.importantDates.whitelist.label'
										)}{' '}
										<span className="font-bold">
											{t(
												'howItWorks.importantDates.whitelist.date'
											)}
										</span>
									</span>
								</li>
								<li className="flex items-center gap-3 text-dark-green-900">
									<span className="h-1.5 w-1.5 rounded-full bg-dark-green-900" />
									<span className="font-medium">
										{t(
											'howItWorks.importantDates.preMint.label'
										)}{' '}
										<span className="font-bold">
											{t(
												'howItWorks.importantDates.preMint.date'
											)}
										</span>
									</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
