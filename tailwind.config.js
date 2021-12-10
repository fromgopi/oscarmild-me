const colors = import('tailwindcss/colors.js');

module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: 'media', // or 'media' or 'class'
	theme: {
			screens: {
				sm: '480px',
				md: '768px',
				lg: '976px',
				xl: '1440px'
			},
			colors: {
				green: colors.emerald,
				red: colors.red,
				yellow: colors.amber,
				teal: colors.teal
			},
			fontFamily: {
				sans: ['Graphik', 'sans-serif'],
				serif: ['Merriweather', 'serif'],
			},
			extend: {
				spacing: {
					'128': '32rem',
					'144': '36rem',
				},
				borderRadius: {
					'4xl': '2rem',
				}
			}
		},
	variants: {
		extend: {},
	},
	plugins: [],
}