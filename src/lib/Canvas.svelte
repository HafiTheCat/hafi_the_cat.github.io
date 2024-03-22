<script lang="ts">
	import { onMount } from "svelte";

	type Pixel = { x: number; y: number; speed: number };

	let canvas: HTMLCanvasElement;

	onMount(() => {
		let windowLoaded = (canvas: HTMLCanvasElement) => {
			let handleResize = (canvas: HTMLCanvasElement) => {
				// Adjusting canvas resolution for high-density displays
				const dpi = window.devicePixelRatio;
				canvas.width = window.innerWidth - 17 * dpi;
				canvas.height = window.innerHeight * dpi;
				canvas.style.width = canvas.width / dpi + "px";
				canvas.style.height = canvas.height / dpi + "px";
				renderCanvas(canvas);
			};

			handleResize(canvas);
			window.addEventListener("resize", () => handleResize(canvas));
			renderCanvas(canvas);
		};

		let renderCanvas = (canvas: HTMLCanvasElement) => {
			var ctx = canvas.getContext("2d");
			// Define an array to store pixel objects
			/**
			 * @type {{ x: any; y: any; speed: any; }[]}
			 */
			const pixels: Pixel[] = [];

			// Function to create a pixel object
			/**
			 * @param {number} x
			 * @param {number} y
			 * @param {number} speed
			 */
			function createPixel(x: number, y: number, speed: number) {
				return {
					x,
					y,
					speed,
				};
			}

			// Function to draw a pixel
			/**
			 * @param {{ x: any; y: any; speed?: any; }} pixel
			 */
			function drawPixel(pixel: Pixel) {
				ctx.fillStyle = "white";
				ctx.fillRect(pixel.x, pixel.y, 2, 2);
			}

			// Function to update the position of a pixel
			/**
			 * @param {{ x: any; y?: any; speed: any; }} pixel
			 */
			function updatePixel(pixel: Pixel) {
				pixel.x -= pixel.speed;
				if (pixel.x < 0) {
					pixel.x = canvas.width;
				}
			}

			// Function to animate the pixels
			function animate() {
				// Clear the canvas
				ctx.clearRect(0, 0, canvas.width, canvas.height);

				// Loop through each pixel
				pixels.forEach((pixel) => {
					// Update and draw the pixel
					updatePixel(pixel);
					drawPixel(pixel);
				});

				// Request animation frame
				requestAnimationFrame(animate);
			}

			/**
			 * @param {number} value
			 * @param {number} oldMin
			 * @param {number} oldMax
			 * @param {number} newMin
			 * @param {number} newMax
			 */
			function mapRange(
				value: number,
				oldMin: number,
				oldMax: number,
				newMin: number,
				newMax: number
			) {
				// First, normalize the value to the range [0, 1]
				const normalizedValue = (value - oldMin) / (oldMax - oldMin);

				// Then, map the normalized value to the new range
				return newMin + normalizedValue * (newMax - newMin);
			}

			// Create and add pixels to the array
			for (let i = 0; i < 500; i++) {
				const x = Math.random() * canvas.width;
				const y = Math.random() * canvas.height;
				const speed = Math.random() * 2 + 0.2; // Random speed between 1 and 3

				// min =>1
				// canvas.height==>0
				if (y > canvas.height / 2) {
					if (Math.random() < mapRange(y, canvas.height / 2, canvas.height, 0.7, 0)) {
						pixels.push(createPixel(x, y, speed));
					}
				} else {
					pixels.push(createPixel(x, y, speed));
				}
			}

			// Start the animation
			animate();
		};
		windowLoaded(canvas);
	});
</script>

<canvas bind:this={canvas} class="absolute top-0 w-screen h-screen max-w-full min-w-full"></canvas>
