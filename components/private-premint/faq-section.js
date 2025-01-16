import React from 'react';

const faqs = [
	{
		number: '1',
		question: 'What is the official mint price in 2025?',
		answer: 'The official mint price will be set at $10,000 per NFT. The pre-mint offers significant discounts, making it the best time to join.',
	},
	{
		number: '2',
		question: 'How can I whitelist my wallet?',
		answer: 'You can whitelist your wallet by submitting your email or wallet address through the form below or by contacting us directly.',
	},
	{
		number: '3',
		question: 'What happens after the private-mint?',
		answer: 'After the pre-mint, NFTs will no longer be available at this discounted price. They will be sold at the official mint price in 2025.',
	},
];

export default function FaqSection() {
	return (
		<section className="py-12 sm:py-20 md:py-32 lg:py-40">
			<div className="max-w-7xl mx-auto px-4">
				<h2 className="text-3xl sm:text-4xl md:text-5xl mb-16 text-dark-green-900 font-bold">
					FAQ
				</h2>

				<div className="space-y-12">
					{faqs.map((faq) => (
						<div
							key={faq.number}
							className="flex gap-8 items-start group"
						>
							{/* Number */}
							<div className="flex-none">
								<span className="text-4xl sm:text-7xl font-noto-serif-display text-beige">
									{faq.number}
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
