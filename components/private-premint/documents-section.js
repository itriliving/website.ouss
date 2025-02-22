import Image from 'next/image';
import { Download } from 'lucide-react';
import { useTranslation } from '../../contexts/TranslationContext';

export default function DocumentsSection() {
	const { t, lang } = useTranslation();

	const getBrochureUrl = () => {
		return lang === 'fr'
			? '/documents/ITRI-brochure-fr.pdf'
			: '/documents/ITRI-brochure-en.pdf';
	};

	return (
		<section className="py-12 sm:py-20">
			<div className="max-w-7xl mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark-green-900 mb-6">
						{t('documents.title')}
					</h2>
					<p className="text-dark-green-900/70 text-lg max-w-3xl mx-auto">
						{t('documents.description')}
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-8">
					{/* Brochure Card */}
					<div className="bg-white rounded-2xl shadow-sm border border-dark-green-900/5 overflow-hidden hover:shadow-lg transition-shadow duration-300">
						<div className="relative h-48">
							<Image
								src="/img/docs-thumbnail.png"
								alt={t('documents.brochure.title')}
								fill
								className="object-cover"
							/>
							<div className="absolute top-4 left-4">
								<span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/90 text-dark-green-900">
									{t('documents.brochure.badge')}
								</span>
							</div>
						</div>
						<div className="p-6">
							<h3 className="text-xl font-bold text-dark-green-900 mb-3">
								{t('documents.brochure.title')}
							</h3>
							<p className="text-dark-green-900/70 mb-6 line-clamp-3">
								{t('documents.brochure.description')}
							</p>
							<a
								href={getBrochureUrl()}
								download
								className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-dark-green-900 hover:text-dark-green-800 transition-colors rounded-lg hover:bg-dark-green-900/5"
							>
								<Download size={16} />
								{t('documents.download')}
							</a>
						</div>
					</div>

					{/* Whitepaper Card */}
					<div className="bg-white rounded-2xl shadow-sm border border-dark-green-900/5 overflow-hidden hover:shadow-lg transition-shadow duration-300">
						<div className="relative h-48">
							<Image
								src="/img/docs-thumbnail.png"
								alt={t('documents.whitepaper.title')}
								fill
								className="object-cover"
							/>
							<div className="absolute top-4 left-4">
								<span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/90 text-dark-green-900">
									{t('documents.whitepaper.badge')}
								</span>
							</div>
						</div>
						<div className="p-6">
							<h3 className="text-xl font-bold text-dark-green-900 mb-3">
								{t('documents.whitepaper.title')}
							</h3>
							<p className="text-dark-green-900/70 mb-6 line-clamp-3">
								{t('documents.whitepaper.description')}
							</p>
							<a
								href="/documents/ITRI-LIVING-WP.pdf"
								download
								className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-dark-green-900 hover:text-dark-green-800 transition-colors rounded-lg hover:bg-dark-green-900/5"
							>
								<Download size={16} />
								{t('documents.download')}
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
