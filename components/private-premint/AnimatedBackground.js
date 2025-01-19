'use client';
import { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
	return (
		<div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
			{/* Top Left Blob */}
			<div
				className="absolute 
					-top-[100px] sm:-top-[150px] lg:-top-[200px] 
					-left-[100px] sm:-left-[150px] lg:-left-[200px] 
					w-[300px] sm:w-[400px] lg:w-[600px]
					h-[600px] sm:h-[800px] lg:h-[1200px] 
					rounded-full rotate-45 bg-dark-green-600/70 blur-[40px] sm:blur-[60px] lg:blur-[80px] 
					animate-pulse-slow"
			/>

			{/* Top Center Blob */}
			<div
				className="absolute 
					top-[300px] sm:top-[400px] lg:top-[500px] 
					left-1/3
					w-[600px] sm:w-[800px] lg:w-[1200px]
					h-[300px] sm:h-[400px] lg:h-[600px]
					rounded-full bg-dark-green-400/70 blur-[50px] sm:blur-[75px] lg:blur-[100px] 
					animate-pulse-slow"
			/>

			{/* Top Right Blob */}
			<div
				className="absolute 
					-top-[250px] sm:-top-[350px] lg:-top-[500px]
					-right-[250px] sm:-right-[350px] lg:-right-[500px]
					w-[600px] sm:w-[800px] lg:w-[1200px]
					h-[300px] sm:h-[400px] lg:h-[600px]
					rounded-full bg-dark-green-900/80 blur-[50px] sm:blur-[75px] lg:blur-[100px] 
					animate-pulse-slow"
			/>
		</div>
	);
}
