<script lang="ts">
	let paradiseName = $state('');
	let { form, data } = $props();
	import { enhance } from '$app/forms';
	let verifyForm: HTMLFormElement;
	let verifyTimer: number | null = null;
	const resetTimer = () => {
		if (verifyTimer) {
			clearTimeout(verifyTimer);
		}

		verifyTimer = setTimeout(() => {
			const activeElement = document.activeElement;
			const start = activeElement.selectionStart;
			const end = activeElement.selectionEnd;

			verifyForm.requestSubmit();
		}, 2000);
	};
	import sel_banner from '$lib/sel_banner.png';
</script>

<div id="i9bnk" class="gjs-image-banner">
	<img src={sel_banner} class="gjs-image-banner" alt="" />
</div>
<div class="h-dvh bg-green-50">
	<div class="yellow mb-8 flex flex-col items-center justify-center pt-6">
		<h1 class="mb-4 text-4xl font-bold">Paradise setup</h1>
		<form
			action="?/paradise"
			method="post"
			use:enhance={() => {
				return async ({ update }) => {
					update({ reset: false });
				};
			}}
			bind:this={verifyForm}
		>
			<div>
				<label for="paradise">What's your paradise name?</label>
				<input
					type="text"
					name="paradise"
					bind:value={paradiseName}
					required
					onkeypress={resetTimer}
				/>
			</div>
			<!-- <div>
			<button type="submit" class="outline outline-2">Verify paradise name</button>
			</div> -->
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
		<p class="mb-8 text-2xl font-bold">Configure your sel</p>
		<form action="?/sel" method="post">
			<div>
				<label for="sel_name">Give your first sel a name: </label>
				<input type="text" name="sel_name" required />
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
			{#if form?.verified}
				<div class="flex flex-col items-center space-y-4 pt-4">
					<button
						type="submit"
						class="drop-drop-shadow-md relative w-max flex-col items-center rounded-lg bg-white text-2xl text-blue-500 transition-transform hover:scale-125"
					>
						Confirm</button
					>
				</div>
			{:else}
				<div>
					<p class="text-red-500">Please verify your paradise name first!</p>
				</div>
			{/if}
		</form>
	</div>
</div>
