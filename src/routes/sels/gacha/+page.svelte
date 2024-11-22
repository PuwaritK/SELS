<script lang="ts">
	import { enhance } from '$app/forms';

	let { form } = $props();
	import sel_banner from '$lib/sel_banner.png';
</script>

<div id="ilw2j" class="gjs-image-box">
	<img src={sel_banner} class="gjs-image-box" alt="" />
</div>
<section class="h-screen bg-green-100">
	<p class="mb-8 justify-self-center text-8xl">Gamba</p>
	<form method="post" use:enhance class="flex flex-col gap-4">
		<div class="gjs-grid-row mt-4 flex content-center items-center justify-center gap-12">
			{#each [1, 5, 10, 50, 100, 777] as pullCount}
				<button
					type="submit"
					class="h-8 w-32 bg-white outline-double outline-2 transition-all hover:scale-125"
					value={pullCount}
					name="pullCount">{pullCount}x</button
				>
			{/each}
		</div>
		{#if typeof form?.result === typeof ''}
			<p class=" mx-auto text-red-600">Insufficient currency</p>
		{/if}
	</form>
</section>

<style>
	@media (max-width: 992px) {
		.gjs-grid-row {
			flex-direction: column;
		}
	}
</style>
