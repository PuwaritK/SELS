<script>
	let { form } = $props();
</script>

<div class="relative flex flex-col items-center">
	<h3 class=" text-4xl">Sign Up</h3>
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
		<div class="columns-2">
			<label for="cpass">Confirm Password: </label><input
				type="password"
				name="confirm_password"
				id="cpass"
				required
			/>
		</div>
		{#if form?.error}
			<p class="error text-red-600">{form.error}</p>
		{/if}
		<div>
			<button type="submit" class=" rounded-lg bg-gray-200 text-blue-400"> Sign Up</button>
		</div>
		{#if form?.created}
			<p class="text-green-500">Account Created! <br /> Please proceed to login page.</p>
			<div
				class=" relative w-max flex-col items-center rounded-lg bg-white text-2xl text-blue-500 drop-shadow-lg transition-transform hover:scale-125"
			>
				<a href="./signin">Sign In</a>
			</div>
		{/if}
	</form>
</div>
