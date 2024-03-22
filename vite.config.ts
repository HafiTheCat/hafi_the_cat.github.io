import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import compression from "vite-plugin-compression";
// import hostnameRename from "./hostnameRename";

// https://vitejs.dev/config/
export default defineConfig({
	base: "https://hafi.is-a.dev/",
	plugins: [
		svelte(),
		compression({
			algorithm: "gzip",
		}),
	],
});
