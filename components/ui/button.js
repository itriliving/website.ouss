import React from 'react';

export default function Button({
	className,
	children,
	onClick,
	type = 'button',
	disabled = false,
	ariaLabel,
	variant = 'primary',
}) {
	const baseStyles =
		'inline-flex items-center justify-center shadow-sm px-6 py-2.5 text-sm font-medium rounded-full transition-colors duration-300  disabled:opacity-50 disabled:cursor-not-allowed';

	const variants = {
		primary: 'bg-dark-green-900 text-white hover:bg-dark-green-800',
		secondary:
			'bg-white text-dark-green-900 hover:bg-dark-green-50',
		outline:
			'bg-transparent text-dark-green-900 hover:bg-dark-green-50',
	};

	return (
		<button
			type={type}
			onClick={onClick}
			disabled={disabled}
			aria-label={ariaLabel}
			className={`
				${baseStyles}
				${variants[variant]}
				${className}
			`}
		>
			{children}
		</button>
	);
}
