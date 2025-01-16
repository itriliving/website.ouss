import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
	return (
		<section className="py-12 sm:py-20">
			<div className="max-w-7xl mx-auto px-4">
				<div className="flex flex-col items-center text-center">
					{/* Main Heading */}
					<h1 className="max-w-4xl mb-6">
						<span className="block text-4xl sm:text-5xl md:text-6xl font-bold text-dark-green-900 mb-4">
							Exclusive Pre-Mint{' '}
							<span className="font-noto-serif-display italic">
								Private Placement
							</span>
						</span>
					</h1>

					{/* Subheading */}
					<div className="space-y-2 mb-10">
						<h2 className="text-2xl sm:text-3xl md:text-4xl text-dark-green-900/90">
							Join a Visionary{' '}
							<span className="font-noto-serif-display italic">
								Journey
							</span>
						</h2>
						<h2 className="text-2xl sm:text-3xl md:text-4xl text-dark-green-900/90">
							Own a Piece of{' '}
							<span className="font-noto-serif-display italic">
								History
							</span>
						</h2>
					</div>

					{/* Description */}
					<p className="max-w-2xl text-dark-green-900/70 text-base sm:text-lg leading-relaxed mb-10">
						This is your opportunity to access Itri Living’s
						groundbreaking NFT collection before the public launch,
						expected S2-2025. Be among the select few to join our
						exclusive Digital Members Club at an exceptional
						pre-mint price— offering up to 45% savings compared to
						the official mint price in 2025.
					</p>

					{/* CTA Button */}
					<div className="relative">
						<button className="group bg-dark-green-900 text-white font-medium px-6 py-3 rounded-full hover:bg-dark-green-900/90 transition-all duration-300 flex items-center gap-2">
							<span>
								Whitelist Your Wallet{' '}
								<span className="font-normal text-white/90">(Manually)</span>
							</span>
							<ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
						</button>
						{/* Button Glow Effect */}
						<div className="absolute -inset-4 bg-dark-green-900/20 blur-xl rounded-full -z-10 group-hover:bg-dark-green-900/30 transition-colors duration-300" />
					</div>
				</div>
			</div>
		</section>
	);
}
