/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				heading: 'Montserrat, sans-serif',
				paragraph: 'Inter, sans-serif',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
};
