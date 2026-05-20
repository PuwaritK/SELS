<script lang="ts">
	import { enhance } from '$app/forms';
	let { form } = $props();
</script>

<section class="h-dvh items-center bg-green-50">
	<div class="justify-items-center justify-self-center">
		<p class="mb-8 justify-self-center text-8xl">Add Currency</p>
	</div>
	<form method="post" use:enhance class="flex flex-col gap-4">
		<div class="mt-4 flex flex-row content-center items-center justify-center gap-12">
			{#each [3000, 30000, 300000] as currency}
				<button
					type="submit"
					class="h-8 w-32 bg-white outline-double outline-2 transition-all hover:scale-125"
					value={currency}
					name="currency">{currency} SPC</button
				>
			{/each}
		</div>

		{#if form?.amount}
			<p class=" mx-auto text-green-500">Successfully added {form?.amount} SPCs</p>
		{/if}
	</form>
</section>
