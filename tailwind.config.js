module.exports = {
	content: ["./index.html", "./src/**/*.{svelte,js,ts}"],
	theme: {
		extend: {
			colors: {
				main: "#0E0E0E",
				main2: "#161616",
				mainfont: "#FFF",
			},
		},
		duration: {
			fast: "1s",
			normal: "3s",
			slow: "5s",
			ultra_slow: "4s",
		},
	},
	plugins: [require("@designbycode/tailwindcss-text-glitch")],
};
