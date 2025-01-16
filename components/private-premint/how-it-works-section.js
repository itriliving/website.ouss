import React from 'react';

export default function HowItWorksSection() {
	return (
		<section className="pt-12 sm:pt-20 pb-24 sm:pb-40">
			<div className="max-w-7xl mx-auto px-4">
				<h2 className="text-3xl sm:text-4xl md:text-5xl mb-12 text-dark-green-900 font-bold">
					How it <span className="italic">works</span>
				</h2>

				<div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
					{/* Main Content */}
					<div className="flex-1">
						<ol className="relative space-y-12">
							{/* Step 1 */}
							<li className="relative pl-12">
								<div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-dark-green-900 text-white font-bold">
									1
								</div>
								<div className="space-y-3">
									<h3 className="text-xl font-bold text-dark-green-900">
										Whitelist Your Wallet
									</h3>
									<ul className="space-y-2 pl-0 text-dark-green-900/80">
										<li className="flex items-start gap-2">
											<span className="mt-2 h-1 w-1 rounded-full bg-dark-green-900/80 shrink-0" />
											<p className="text-sm sm:text-base">
												Provide your wallet address to
												secure your spot in the private
												mint. Don’t forget your Referral
												wallet address.
											</p>
										</li>
										<li className="flex items-start gap-2">
											<span className="mt-2 h-1 w-1 rounded-full bg-dark-green-900/80 shrink-0" />
											<p className="text-sm sm:text-base">
												Use the form below or contact us
												via email, LinkedIn, or through
												one of our partners.
											</p>
										</li>
									</ul>
								</div>
							</li>

							{/* Step 2 */}
							<li className="relative pl-12">
								<div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-dark-green-900 text-white font-bold">
									2
								</div>
								<div className="space-y-3">
									<h3 className="text-xl font-bold text-dark-green-900">
										Private-Mint
									</h3>
									<p className="text-sm sm:text-base text-dark-green-900/80">
										Once your wallet is whitelisted, and
										your referral registered, you’ll gain
										exclusive access to the private-mint
										function.
									</p>
								</div>
							</li>

							{/* Step 3 */}
							<li className="relative pl-12">
								<div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-dark-green-900 text-white font-bold">
									3
								</div>
								<div className="space-y-3">
									<h3 className="text-xl font-bold text-dark-green-900">
										Mint Your NFT during the mint period
									</h3>
									<p className="text-sm sm:text-base text-dark-green-900/80">
										Connect your wallet, and complete your
										purchase (using ETH){' '}
									</p>
								</div>
							</li>
						</ol>
					</div>

					{/* Important Dates */}
					<div className="flex-1">
						<div className="bg-neon-blue p-8 rounded-xl space-y-6 shadow-lg border border-dark-green-900/10">
							<h3 className="text-xl font-bold text-dark-green-900 italic">
								Important Dates:
							</h3>
							<ul className="space-y-4">
								<li className="flex items-center gap-3 text-dark-green-900">
									<span className="h-1.5 w-1.5 rounded-full bg-dark-green-900" />
									<span className="font-medium">
										Whitelist Deadline:{' '}
										<span className="font-bold">
											February 10, 2025
										</span>
									</span>
								</li>
								<li className="flex items-center gap-3 text-dark-green-900">
									<span className="h-1.5 w-1.5 rounded-full bg-dark-green-900" />
									<span className="font-medium">
										Pre-Mint Period:{' '}
										<span className="font-bold">
											24h after whitelisting closes (for a
											period of 48h).
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
