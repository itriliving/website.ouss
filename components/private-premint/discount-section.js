import { ArrowRight } from 'lucide-react';

export default function DiscountSection() {
	return (
		<section className="bg-dark-green-900 py-16 sm:py-24 relative overflow-hidden">
			{/* Background Pattern */}
			<div className="absolute inset-0 opacity-10">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-light-blue to-transparent" />
			</div>

			<div className="max-w-7xl mx-auto px-4 text-center relative">
				<div className="space-y-8">
					{/* Discount Badge */}
					<div className="inline-block">
						<div className="bg-light-blue/20 backdrop-blur-sm px-6 py-2 rounded-full">
							<p className="text-light-blue font-medium">
								Limited Time Pre-Mint Offer
							</p>
						</div>
					</div>

					{/* Main Content */}
					<div className="flex flex-col items-center space-y-6">
						<h2 className="text-3xl sm:text-4xl md:text-5xl text-light-blue font-bold max-w-3xl mx-auto">
							Up to{' '}
							<span className="relative inline-block">
								45%
								<div className="absolute -bottom-1 left-0 w-full h-1 bg-light-blue rounded-full opacity-30" />
							</span>{' '}
							Off the Public Mint Price
						</h2>

						<p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
							Secure your NFT now for a fraction of the cost and
							become part of a community shaping the future of
							digital art and real-world benefits.
						</p>

						{/* CTA Button */}
						<div className="pt-4 mx-auto">
							<button className="font-medium px-4 py-2 rounded-full hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed group flex gap-1 items-center bg-light-blue hover:bg-light-blue/90 text-dark-green-900">
								<span>Reserve Your Spot</span>
								<ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
