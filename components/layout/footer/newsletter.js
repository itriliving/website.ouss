'use client';
import { useState } from 'react';
import Arrow from '../../common/arrow';

export default function Newsletter() {
	const [input, setInput] = useState('');
	function handleSubmit(e) {
		e.preventDefault();
		setInput('');
	}
	return (
		<div className="flex flex-col items-center gap-4 mt-10">
			<p className="max-w-80 text-center">
				Keep up with location openings, community events, and other
				news.
			</p>
			<form onSubmit={handleSubmit} className="flex">
				<input
					className="border border-white/40 outline-none bg-white/10 px-6 py-2 rounded-l-full max-w-72"
					type="text"
					value={input}
					placeholder="Your email"
					onChange={(e) => setInput(e.target.value)}
				/>
				<button
					className="pr-4 pl-2 border border-l-0 border-white/40 outline-none bg-white/10 hover:bg-white/25 rounded-r-full"
					type="submit"
				>
					<Arrow height={25} />
				</button>
			</form>
		</div>
	);
}
