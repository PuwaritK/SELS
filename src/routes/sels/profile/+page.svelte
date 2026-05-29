<script lang="ts">
	import { onMount } from 'svelte';

	let { data } = $props();
	let loadedData = () => data;
	let selSex: string[] = $state(['', '', '', '', '']);
	let selType: string[] = $state(['', '', '', '', '']);

	let canvas1: HTMLCanvasElement | null = $state(null);
	let canvas2: HTMLCanvasElement | null = $state(null);
	let canvas3: HTMLCanvasElement | null = $state(null);
	let canvas4: HTMLCanvasElement | null = $state(null);
	let canvas5: HTMLCanvasElement | null = $state(null);

	let imagesToStack: string[][] = [];

	if (loadedData().shownSel[0]) {
		switch (loadedData().shownSel[0].sex_id) {
			case 1: {
				selSex[0] = 'm';
				break;
			}
			case 2: {
				selSex[0] = 'f';
				break;
			}
			case 3: {
				selSex[0] = 's';
				break;
			}
		}
		switch (loadedData().shownSel[0].type_id) {
			case 1: {
				selType[0] = 'harper';
				break;
			}
			case 2: {
				selType[0] = 'grey';
				break;
			}
			case 3: {
				selType[0] = 'baikal';
				break;
			}
			case 4: {
				selType[0] = 'elephant';
				break;
			}
			case 5: {
				selType[0] = 'leopard';
				break;
			}
			case 6: {
				selType[0] = 'sealion';
				break;
			}
			case 7: {
				selType[0] = 'walrus';
				break;
			}
		}
		imagesToStack.push([
			`/sprites/sx-sex.png`.replace('sex', selSex[0]),
			`/sprites/type-race.png`.replace('race', () => selType[0]),
			`/sprites/tier-level.png`.replace('level', loadedData().shownSel[0].tier_id.toString())
		]);
	}
	if (loadedData().shownSel[1]) {
		switch (loadedData().shownSel[1].sex_id) {
			case 1: {
				selSex[1] = 'm';
				break;
			}
			case 2: {
				selSex[1] = 'f';
				break;
			}
			case 3: {
				selSex[1] = 's';
				break;
			}
		}
		switch (loadedData().shownSel[1].type_id) {
			case 1: {
				selType[1] = 'harper';
				break;
			}
			case 2: {
				selType[1] = 'grey';
				break;
			}
			case 3: {
				selType[1] = 'baikal';
				break;
			}
			case 4: {
				selType[1] = 'elephant';
				break;
			}
			case 5: {
				selType[1] = 'leopard';
				break;
			}
			case 6: {
				selType[1] = 'sealion';
				break;
			}
			case 7: {
				selType[1] = 'walrus';
				break;
			}
		}
		imagesToStack.push([
			`/sprites/sx-sex.png`.replace('sex', selSex[1]),
			`/sprites/type-race.png`.replace('race', () => selType[1]),
			`/sprites/tier-level.png`.replace('level', loadedData().shownSel[1].tier_id.toString())
		]);
	}
	if (loadedData().shownSel[2]) {
		switch (loadedData().shownSel[2].sex_id) {
			case 1: {
				selSex[2] = 'm';
				break;
			}
			case 2: {
				selSex[2] = 'f';
				break;
			}
			case 3: {
				selSex[2] = 's';
				break;
			}
		}
		switch (loadedData().shownSel[2].type_id) {
			case 1: {
				selType[2] = 'harper';
				break;
			}
			case 2: {
				selType[2] = 'grey';
				break;
			}
			case 3: {
				selType[2] = 'baikal';
				break;
			}
			case 4: {
				selType[2] = 'elephant';
				break;
			}
			case 5: {
				selType[2] = 'leopard';
				break;
			}
			case 6: {
				selType[2] = 'sealion';
				break;
			}
			case 7: {
				selType[2] = 'walrus';
				break;
			}
		}
		imagesToStack.push([
			`/sprites/sx-sex.png`.replace('sex', selSex[2]),
			`/sprites/type-race.png`.replace('race', () => selType[2]),
			`/sprites/tier-level.png`.replace('level', loadedData().shownSel[2].tier_id.toString())
		]);
	}
	if (loadedData().shownSel[3]) {
		switch (loadedData().shownSel[3].sex_id) {
			case 1: {
				selSex[3] = 'm';
				break;
			}
			case 2: {
				selSex[3] = 'f';
				break;
			}
			case 3: {
				selSex[3] = 's';
				break;
			}
		}
		switch (loadedData().shownSel[3].type_id) {
			case 1: {
				selType[3] = 'harper';
				break;
			}
			case 2: {
				selType[3] = 'grey';
				break;
			}
			case 3: {
				selType[3] = 'baikal';
				break;
			}
			case 4: {
				selType[3] = 'elephant';
				break;
			}
			case 5: {
				selType[3] = 'leopard';
				break;
			}
			case 6: {
				selType[3] = 'sealion';
				break;
			}
			case 7: {
				selType[3] = 'walrus';
				break;
			}
		}
		imagesToStack.push([
			`/sprites/sx-sex.png`.replace('sex', selSex[3]),
			`/sprites/type-race.png`.replace('race', () => selType[3]),
			`/sprites/tier-level.png`.replace('level', loadedData().shownSel[3].tier_id.toString())
		]);
	}
	if (loadedData().shownSel[4]) {
		switch (loadedData().shownSel[4].sex_id) {
			case 1: {
				selSex[4] = 'm';
				break;
			}
			case 2: {
				selSex[4] = 'f';
				break;
			}
			case 3: {
				selSex[4] = 's';
				break;
			}
		}
		switch (loadedData().shownSel[4].type_id) {
			case 1: {
				selType[4] = 'harper';
				break;
			}
			case 2: {
				selType[4] = 'grey';
				break;
			}
			case 3: {
				selType[4] = 'baikal';
				break;
			}
			case 4: {
				selType[4] = 'elephant';
				break;
			}
			case 5: {
				selType[4] = 'leopard';
				break;
			}
			case 6: {
				selType[4] = 'sealion';
				break;
			}
			case 7: {
				selType[4] = 'walrus';
				break;
			}
		}
		imagesToStack.push([
			`/sprites/sx-sex.png`.replace('sex', selSex[4]),
			`/sprites/type-race.png`.replace('race', () => selType[4]),
			`/sprites/tier-level.png`.replace('level', loadedData().shownSel[4].tier_id.toString())
		]);
	}
	onMount(async () => {
		const loadImage = async (src: string): Promise<HTMLImageElement> => {
			return new Promise((resolve) => {
				const img = new Image();
				img.src = src;
				img.onload = () => resolve(img);
			});
		};

		if (imagesToStack[0]) {
			const loadedImages1 = await Promise.all(imagesToStack[0].map(loadImage));
			if (canvas1) {
				let ctx1 = canvas1.getContext('2d');
				if (ctx1) {
					for (let index = 0; index < loadedImages1.length; index++) {
						let element = loadedImages1[index];
						ctx1.drawImage(element, 0, 0, canvas1.width, canvas1.height);
					}
				}
			}
		}
		if (imagesToStack[1]) {
			const loadedImages2 = await Promise.all(imagesToStack[1].map(loadImage));
			if (canvas2) {
				let ctx2 = canvas2.getContext('2d');
				if (ctx2) {
					for (let index = 0; index < loadedImages2.length; index++) {
						let element = loadedImages2[index];
						ctx2.drawImage(element, 0, 0, canvas2.width, canvas2.height);
					}
				}
			}
		}
		if (imagesToStack[2]) {
			const loadedImages3 = await Promise.all(imagesToStack[2].map(loadImage));
			if (canvas3) {
				let ctx3 = canvas3.getContext('2d');
				if (ctx3) {
					for (let index = 0; index < loadedImages3.length; index++) {
						let element = loadedImages3[index];
						ctx3.drawImage(element, 0, 0, canvas3.width, canvas3.height);
					}
				}
			}
		}
		if (imagesToStack[3]) {
			const loadedImages4 = await Promise.all(imagesToStack[3].map(loadImage));
			if (canvas4) {
				let ctx4 = canvas4.getContext('2d');
				if (ctx4) {
					for (let index = 0; index < loadedImages4.length; index++) {
						let element = loadedImages4[index];
						ctx4.drawImage(element, 0, 0, canvas4.width, canvas4.height);
					}
				}
			}
		}
		if (imagesToStack[4]) {
			const loadedImages5 = await Promise.all(imagesToStack[4].map(loadImage));
			if (canvas5) {
				let ctx5 = canvas5.getContext('2d');
				if (ctx5) {
					for (let index = 0; index < loadedImages5.length; index++) {
						let element = loadedImages5[index];
						ctx5.drawImage(element, 0, 0, canvas5.width, canvas5.height);
					}
				}
			}
		}
	});
</script>

<section class=" bg-green-100">
	<div class="m-16 flex flex-col">
		<div class="bot-1 top-1 flex flex-col rounded-2xl bg-pink-100">
			<div class="bot-1 top-1 right-1 left-1 flex-col">
				<div class="ml-1 h-48 max-h-48 w-48 max-w-48 gap-4 shadow-black outline-1 outline-solid">
					{#if data.shownSel[0] !== null}
						<canvas class="absolute z-1 h-48 w-48" bind:this={canvas1} width="192" height="192"
						></canvas>
					{:else}
						<div class="justify-center align-middle">
							<p class="text-center">No Sel to show.</p>
						</div>
					{/if}
				</div>
			</div>
			<div class=" text-xl">
				<div>Username: {data.username}</div>
				<div>SEL Amount: {data.selCount}<br /></div>
				<div>Highest Rarity: {data.highestRarityName?.name}<br /></div>
			</div>
		</div>
	</div>
</section>
<div class="min-h-64 flex-col gap-6 bg-blue-100">
	<div class=" rounded-2xl">
		<a
			href="./profile/manage"
			class=" rounded-2xl bg-yellow-100 text-2xl transition-all hover:scale-110"
			>Manage SEL!<br /></a
		>
	</div>
	<div class="">
		<div class="h-48 max-h-48 w-48 max-w-48 gap-4 shadow-black outline-1 outline-solid">
			{#if data.shownSel[1] !== null}
				<canvas class="absolute z-1 h-48 w-48" bind:this={canvas2} width="192" height="192"
				></canvas>
			{:else}
				<div class="justify-center align-middle">
					<p class="text-center">No Sel to show.</p>
				</div>
			{/if}
		</div>
	</div>
	<div class="">
		<div class="h-48 max-h-48 w-48 max-w-48 gap-4 shadow-black outline-1 outline-solid">
			{#if data.shownSel[2] !== null}
				<canvas class="absolute z-1 h-48 w-48" bind:this={canvas3} width="192" height="192"
				></canvas>
			{:else}
				<div class="justify-center align-middle">
					<p class="text-center">No Sel to show.</p>
				</div>
			{/if}
		</div>
	</div>
	<div class="">
		<div class="h-48 max-h-48 w-48 max-w-48 gap-4 shadow-black outline-1 outline-solid">
			{#if data.shownSel[3] !== null}
				<canvas class="absolute z-1 h-48 w-48" bind:this={canvas4} width="192" height="192"
				></canvas>
			{:else}
				<div class="justify-center align-middle">
					<p class="text-center">No Sel to show.</p>
				</div>
			{/if}
		</div>
	</div>
	<div class="">
		<div class="h-48 max-h-48 w-48 max-w-48 gap-4 shadow-black outline-1 outline-solid">
			{#if data.shownSel[4] !== null}
				<canvas class="absolute z-1 h-48 w-48" bind:this={canvas5} width="192" height="192"
				></canvas>
			{:else}
				<div class="justify-center align-middle">
					<p class="text-center">No Sel to show.</p>
				</div>
			{/if}
		</div>
	</div>
</div>
