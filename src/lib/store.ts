import { writable } from "svelte/store";

export const scrollValue = writable(0);

window.addEventListener("scroll", (event) => {
	let scroll = window.scrollY;
	scrollValue.set(scroll);
});
