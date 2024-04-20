/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			'sm': '640px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1232px',
		},
		extend: {
			colors: {
				navyBlue: '#0c111f',
				lightNavyBlue: '#121b2c',
				navyBorder: '#21304c',
				purpleBlue: '#486ff8',
				blue: '#3898ec',
				teal: '#00a5ca',
				gray: '#97a1b6'
			},
			fontFamily: {
				sans: ["Satoshi", "sans-serif"],
			}
		},
	},
	plugins: [],
}
