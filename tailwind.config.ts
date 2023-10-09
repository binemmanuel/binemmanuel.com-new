import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			/* backgroundImage: {
				"hero-pattern": "url('/images/about-me.jpg')",
				"footer-texture": "url('/images/about-me.jpg')",
			}, */
			colors: {
				black: "#1f2025",
				brown: "#926661",
			},
		},
	},

	plugins: [],
};
export default config;
