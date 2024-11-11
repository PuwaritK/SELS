<script>
	let paradiseName = $state('');
	let { form, data } = $props();
	import { enhance } from '$app/forms';
</script>

<div class="mb-8 mt-8 flex flex-col items-center justify-center">
	<h1 class="mb-4 text-4xl">Paradise setup</h1>
	<form
		action="?/paradise"
		method="post"
		use:enhance={() => {
			return async ({ update }) => {
				update({ reset: false });
			};
		}}
	>
		<div>
			<label for="paradise">What's your paradise name?</label>
			<input type="text" name="paradise" bind:value={paradiseName} />
		</div>
		<div>
			<button type="submit">Verify paradise name</button>
		</div>
	</form>
	{#if form?.verified}
		{#if form.isPNameExist}
			<p class="text-red-500">Paradise name unavailable!</p>
		{:else}
			<p class="text-green-500">Paradise name available!</p>
		{/if}
	{/if}
</div>

<div class="flex flex-col items-center justify-center">
	<p class="mb-8 text-2xl">Configure your sel</p>
	<form action="?/sel" method="post">
		<div>
			<label for="sel_name">Give your first sel a name: </label>
			<input type="text" name="sel_name" />
		</div>
		<div>
			<label for="sel_type">Choose your sel race: </label>
			<select name="sel_type" id="seltype">
				{#each data.selTypes as type}
					<option value={type.type_id}>{type.type_name}</option>
				{/each}
			</select>
		</div>
		<div>
			<label for="sel_colour">Choose your sel colour:</label>
			<input type="color" name="sel_colour" id="selcolour" />
		</div>
		<div>
			<label for="sel_sex">Choose your sel sex:</label>
			<select name="sel_sex" id="selsex">
				<option value="1">Male</option>
				<option value="2">Female</option>
			</select>
		</div>
		<input type="hidden" name="paradise_name" bind:value={paradiseName} />
		<div>
			<button type="submit" class="outline outline-2">Confirm</button>
		</div>
	</form>
</div>
