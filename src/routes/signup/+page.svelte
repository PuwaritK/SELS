<script lang="ts">
	import { enhance } from '$app/forms';
	let { form } = $props();
	import sel_banner from '$lib/sel_banner.png';
</script>

<title>Sign Up</title>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<meta name="robots" content="index,follow" />
<meta name="generator" content="GrapesJS Studio" />
<div  class="">
	<img src={sel_banner} class="" alt="" />
</div>
<div  class="flex-col">
	<div  class=" bg-gray-700">
		<div  class="text-white">Let's make an account!<br /></div>
	</div>
</div>
<section class="">
	<div class="">
		<div class="flex items-center justify-center bg-pink-50 pb-4 pt-4">
			<form method="post" class="flex flex-col items-center" use:enhance>
				<div class="flex flex-row justify-center justify-items-center gap-2">
					<div class="flex flex-col items-end justify-center">
						<label for="user" class="mb-1 h-8">Username: </label>
						<label for="pass" class="mb-1 h-8">Password: </label>
						<label for="cpass" class="mb-1 h-8">Confirm Password: </label>
					</div>
					<div class="flex flex-col justify-center">
						<input type="text" name="username" id="user" maxlength="20" class="mb-1 h-8" required />
						<input type="password" name="password" id="pass" class="mb-1 h-8" required />
						<input type="password" name="confirm_password" id="cpass" class="mb-1 h-8" required />
					</div>
				</div>
				{#if form?.error}
					<p class="error text-red-600">{form.error}</p>
				{/if}
				{#if form?.created}
					<p class="text-green-600">Account Created! <br /> Please proceed to sign in page.</p>
					<div
						class="drop-drop-shadow-md relative mt-2 w-max flex-col items-center rounded-lg bg-white text-2xl text-blue-500 transition-transform hover:scale-125"
					>
						<a href="./signin">Sign In</a>
					</div>
				{:else}
					<div class="flex flex-col items-center space-y-4 pt-4">
						<button
							type="submit"
							class="drop-drop-shadow-md relative w-max flex-col items-center rounded-lg bg-white text-2xl text-blue-500 transition-transform hover:scale-125"
						>
							Sign Up</button
						>
					</div>
				{/if}
			</form>
		</div>
	</div>
</section>

