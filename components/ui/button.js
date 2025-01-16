import React from 'react';

export default function Button({
	className,
	children,
	onClick,
	type = 'button',
	disabled = false,
	ariaLabel,
}) {
	return (
		<button
			type={type}
			onClick={onClick}
			disabled={disabled}
			aria-label={ariaLabel}
			className={`bg-beige text-white font-medium px-4 py-2 rounded-full hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
		>
			{children}
		</button>
	);
}
