<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { onMount } from 'svelte';
	import dark_sel_banner from '$lib/dark_sel_banner.png';
	import { Button } from '$lib/components/ui/button/index.js';

	let { data } = $props();
	const availableDisplayText = [
		'Content warning! Contains gacha.',
		'"sel." -Sel',
		'A gacha game to feed your gambling addiction.',
		"Oh, it's not really gambling when you never lose.",
		'Gambling has brought our family together. We had to move to a smaller house.',
		'I love online gambling.'
	];
	afterNavigate(() => {
		const index = Math.floor(Math.random() * availableDisplayText.length);
		displayText = availableDisplayText[index];
	});
	onMount(() => {
		const index = Math.floor(Math.random() * availableDisplayText.length);
		displayText = availableDisplayText[index];
	});
	let displayText = $state('');
</script>

<div class="bg-background flex min-h-svh flex-col items-center">
	<img src={dark_sel_banner} alt="" class="w-full object-contain" />

	<div class="relative top-8 flex flex-col items-center space-y-8 pb-7">
		<div class="text-center font-serif text-8xl font-bold">
			<h1>Welcome to SELS!</h1>
		</div>
		<div class="space-y-8 text-center align-middle text-4xl">
			<p>{displayText}</p>
			<p class="font-bold">Login or signup now!</p>
		</div>
		{#if !data.isSignedIn}
			<div class="col-span-2 flex gap-x-16">
				<Button href="/signup" size="lg" class="text-xl">Sign Up</Button>
				<Button href="/signin" size="lg" class="text-xl">Sign In</Button>
			</div>
		{:else}
			<div class="flex content-evenly justify-center">
				<p>{data.signedInAs}</p>
				<br />
			</div>
			<Button href="/sels/profile" size="lg" class="text-xl">Proceed to SELS</Button>
		{/if}
	</div>
</div>
