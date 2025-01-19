'use client';
import { useState } from 'react';
import Arrow from '../../common/arrow';
import { useTranslation } from '../../../contexts/TranslationContext';

export default function Newsletter() {
	const [input, setInput] = useState('');
	const { t } = useTranslation();

	function handleSubmit(e) {
		e.preventDefault();
		setInput('');
	}

	return (
		<div className="w-full max-w-md mx-auto mt-12">
			<p className="text-sm text-white/70 text-center mb-6">
				{t('footer.newsletter.description')}
			</p>
			<form onSubmit={handleSubmit} className="flex">
				<input
					className="flex-1 bg-white/5 border border-white/10 rounded-l-full px-6 py-3 
                    text-white placeholder:text-white/40
                    focus:outline-none focus:border-white/20 focus:bg-white/10
                    transition-colors"
					type="email"
					value={input}
					placeholder={t('footer.newsletter.placeholder')}
					onChange={(e) => setInput(e.target.value)}
				/>
				<button
					className="px-6 py-3 bg-white/10 border border-l-0 border-white/10 
                    rounded-r-full hover:bg-white/20 transition-colors
                    focus:outline-none focus:bg-white/20"
					type="submit"
				>
					<Arrow height={20} className="text-white" />
				</button>
			</form>
		</div>
	);
}
