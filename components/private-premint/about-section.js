import Image from 'next/image';
import { useTranslation } from '../../contexts/TranslationContext';

export default function AboutSection() {
	const { t } = useTranslation();

	return (
		<section className="py-12 sm:py-20 px-4">
			<div className="relative max-w-7xl mx-auto px-10 lg:px-16 py-20 lg:py-32 rounded-xl shadow-[100px_20px_2000px_rgba(13,118,118,0.6)] bg-dark-green-900/10">
				<div className="absolute inset-0 w-full h-full rounded-xl overflow-hidden">
					<div className="absolute inset-0 bg-white/20" />
					<div className="absolute inset-0 backdrop-blur-xl" />
				</div>

				{/* Content */}
				<div className="relative z-20 flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
					{/* Text Content */}
					<div className="flex-1">
						<h2 className="text-3xl sm:text-4xl md:text-5xl mb-12 font-bold text-dark-green-900">
							{t('about.title')}
						</h2>
						<p className="text-xl sm:text-2xl mb-4 text-dark-green-900 font-bold">
							{t('about.subtitle')}
						</p>
						<p className="text-dark-green-900/80 text-sm sm:text-base font-semibold">
							{t('about.description')}
						</p>
					</div>

					{/* Images */}
					<div className="flex-1 relative -top-12 h-[340px]">
						<div className="group absolute left-0 top-0 w-2/3 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-xl overflow-hidden">
							<div className="relative">
								<Image
									src="/img/about-section.jpg"
									alt={t('about.images.alt1')}
									width={340}
									height={340}
									className="w-full h-auto group-hover:scale-110 transition-all duration-300"
								/>
								<div className="absolute inset-0 backdrop-blur-md bg-black/5 rounded-xl" />
							</div>
						</div>
						<div className="group absolute right-0 top-12 w-2/3 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-xl overflow-hidden">
							<div className="relative">
								<Image
									src="/img/about-section.jpg"
									alt={t('about.images.alt2')}
									width={340}
									height={340}
									className="w-full h-auto group-hover:scale-110 transition-all duration-300"
								/>
								<div className="absolute inset-0 backdrop-blur-md bg-black/5 rounded-xl" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
