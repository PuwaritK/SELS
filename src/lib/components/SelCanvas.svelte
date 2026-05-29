<script lang="ts">
	import { onMount } from 'svelte';
	import type { sel as Sel } from '@prisma/client';

	let { sel }: { sel: Sel } = $props();

	let canvas: HTMLCanvasElement | null = $state(null);

	const getSpritePaths = (sel: any) => {
		let sex = '';
		switch (sel.sex_id) {
			case 1:
				sex = 'm';
				break;
			case 2:
				sex = 'f';
				break;
			case 3:
				sex = 's';
				break;
		}

		let type = '';
		switch (sel.type_id) {
			case 1:
				type = 'harper';
				break;
			case 2:
				type = 'grey';
				break;
			case 3:
				type = 'baikal';
				break;
			case 4:
				type = 'elephant';
				break;
			case 5:
				type = 'leopard';
				break;
			case 6:
				type = 'sealion';
				break;
			case 7:
				type = 'walrus';
				break;
		}

		return [
			`/sprites/sx-${sex}.png`,
			`/sprites/type-${type}.png`,
			`/sprites/tier-${sel.tier_id}.png`
		];
	};

	$effect(() => {
		if (!canvas || !sel) return;

		const draw = async () => {
			const loadImage = async (src: string): Promise<HTMLImageElement> => {
				return new Promise((resolve) => {
					const img = new Image();
					img.src = src;
					img.onload = () => resolve(img);
				});
			};

			const paths = getSpritePaths(sel);
			const images = await Promise.all(paths.map(loadImage));

			const ctx = canvas?.getContext('2d');
			if (ctx && canvas) {
				ctx.clearRect(0, 0, canvas.width, canvas.height);
				for (const img of images) {
					ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
				}
			}
		};

		draw();
	});
</script>

<canvas bind:this={canvas} width="192" height="192" class="h-full w-full"></canvas>
