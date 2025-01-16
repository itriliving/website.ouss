/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				inter: ['Inter', 'system-ui', 'sans-serif'],
				'noto-serif-display': ['"Noto Serif Display"', 'serif'],
			},
			colors: {
				beige: '#AC8E60',
				'light-blue': '#8BF3F3',
				'neon-blue': '#CEF6F6',
				'dark-green': {
					50: '#E6EDED',
					100: '#CDDCDC',
					200: '#B4CFCF',
					300: '#9BBFBF',
					400: '#82AFAF',
					500: '#699F9F',
					600: '#508F8F',
					700: '#377F7F',
					DEFAULT: '#0D7676',
					900: '#074B4B',
				},
			},
		},
	},
	plugins: [],
};
