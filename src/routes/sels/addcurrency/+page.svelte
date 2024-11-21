<script lang="ts">
	import { enhance } from '$app/forms';
</script>

<p class="justify-self-center text-8xl">Add Currency</p>
<form method="post" use:enhance class="flex flex-col gap-4">
	<div class="mt-4 flex flex-row content-center items-center justify-center gap-12">
		{#each [3000, 30000, 300000] as currency}
			<button
				type="submit"
				class="w-28 outline-double outline-2 outline-offset-4 hover:scale-125"
				value={currency}
				name="currency">{currency} SPC</button
			>
		{/each}
	</div>
</form>
