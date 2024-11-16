<script lang="ts">
	import { enhance } from '$app/forms';

	let { form } = $props();
</script>

<p class="justify-self-center text-8xl">Gamba</p>
<form method="post" use:enhance class="flex flex-col gap-4">
	<div class="mt-4 flex flex-row justify-center gap-12">
		{#each [1, 5, 10, 50, 100, 777] as pullCount}
			<button
				type="submit"
				class="w-28 outline-double outline-2 outline-offset-4"
				value={pullCount}
				name="pullCount">{pullCount}x</button
			>
		{/each}
	</div>
	{#if typeof form?.result === typeof ''}
		<p class=" mx-auto text-red-600">Insufficient currency</p>
	{/if}
</form>
