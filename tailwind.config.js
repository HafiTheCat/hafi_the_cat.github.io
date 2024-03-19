module.exports = {
	content: ["./index.html", "./src/**/*.{svelte,js,ts}"],
	theme: {
		extend: {
			colors: {
				main: "#0E0E0E",
				main2: "#161616",
				mainfont: "#FFF",
			},
			keyframes: {
				slidein: {
					from: {
						opacity: "0",
						transform: "translateY(-10px)",
					},
					to: {
						opacity: "1",
						transform: "translateY(0)",
					},
				},
			},
			animation: {
				slidein: "slidein 1s ease-in 300ms",
				slidein300: "slidein 200ms ease-in 100ms both",
				slidein500: "slidein 1s ease-in 500ms both",
				slidein700: "slidein 1s ease-in 700ms both",
			},
		},
		duration: {
			fast: "1s",
			normal: "3s",
			slow: "5s",
			ultra_slow: "4s",
		},
	},
	plugins: [
		require('@tailwindcss/container-queries'),
		require("@designbycode/tailwindcss-text-glitch"),
		require("tailwind-heropatterns")({
			patterns: [],
			colors: {
				default: "#9C92AC",
				vermillion: "#ffedee", //also works with rgb(0,0,205)
      },
      opacity: {
        default: "0.4",
        "100": "1.0"
      }
		}),
	],
};
