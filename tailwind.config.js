/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,vue}"],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			"light",
			"dark",
			"cupcake",
			"corporate",
			"valentine",
			"garden",
			"forest",
			"lofi",
			"pastel",
			"dracula",
			"acid",
			"lemonade",
			"night",
			"winter",
		],
	},
};
