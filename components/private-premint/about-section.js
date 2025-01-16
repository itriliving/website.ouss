import Image from 'next/image';

export default function AboutSection() {
	return (
		<section className="py-12 sm:py-20">
			<div className="max-w-7xl bg-neon-blue mx-auto px-10 py-32 rounded-md">
				<div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
					{/* Text Content */}
					<div className="flex-1">
						<h2 className="text-3xl sm:text-4xl md:text-5xl mb-12 font-bold text-dark-green-900">
							About the Collection
						</h2>
						<p className="text-xl sm:text-2xl mb-4 text-dark-green-900 font-bold">
							"9999 Unique NFTs Inspired by the Cosmos"
						</p>
						<p className="text-dark-green-900/80 text-sm sm:text-base font-semibold">
							Each NFT represents a historical constellation—a
							timeless piece of the universe tied to humanity's
							greatest milestones. Owning an Itri NFT grants you
							membership to an elite digital club of pioneers who
							value authenticity, exclusivity, and innovation.
						</p>
					</div>

					{/* Images */}
					<div className="flex-1 relative -top-12 h-[340px]">
						<div className="group absolute left-0 top-0 w-2/3 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden">
							<div className="relative">
								<Image
									src="/img/about-section.jpg"
									alt="Constellation NFT Example 1"
									width={340}
									height={340}
									className="w-full h-auto  group-hover:scale-110 transition-all duration-300"
								/>
								<div className="absolute inset-0 backdrop-blur-md bg-black/5 rounded-2xl" />
							</div>
						</div>
						<div className="group absolute right-0 top-12 w-2/3 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden">
							<div className="relative">
								<Image
									src="/img/about-section.jpg"
									alt="Constellation NFT Example 2"
									width={340}
									height={340}
									className="w-full h-auto group-hover:scale-110 transition-all duration-300"
								/>
								<div className="absolute inset-0 backdrop-blur-md bg-black/5 rounded-2xl" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
