import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import hostnameRename from "./hostnameRename";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		svelte(),
		hostnameRename({
			// hostname: "hafi_the_cat.github.io", // Replace with your desired hostname
			hostname: "", // Replace with your desired hostname
		}),
	],
});
