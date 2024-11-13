<script>
	let { form } = $props();
</script>

<div class="relative flex flex-col items-center">
	<h3 class=" text-4xl">Sign In</h3>
	<br />
	<form method="post" class="space-y-4">
		<div class="columns-2">
			<label for="user" class=" colum">Username: </label>
			<input type="text" name="username" id="user" required />
		</div>
		<div class="columns-2">
			<label for="pass">Password: </label>
			<input type="password" name="password" id="pass" required />
		</div>
		{#if form?.error}
			<p class="error text-red-600">{form.error}</p>
		{/if}
		<div>
			<button type="submit" class=" rounded-lg bg-gray-200 text-blue-400"> Sign In</button>
		</div>
	</form>
</div>
