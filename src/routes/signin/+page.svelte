<script lang="ts">
	let { form } = $props();
	import sel_banner from '$lib/sel_banner.png';
</script>

<div class="gjs-image-banner">
	<img src={sel_banner} class="gjs-image-banner" alt="" />
</div>
<div  class="flex-col">
	<div  class="gjs-grid-column bg-gray-700">
		<div  class="text-white">Welcome to the login page!<br /></div>
	</div>
</div>
<section class="gjs-section">
	<div class="gjs-container">
		<div class="flex items-center justify-center bg-blue-50 pb-4 pt-4">
			<form method="post" class="gap-4 space-y-4">
				<div class="flex flex-row justify-center justify-items-center gap-2">
					<div class="flex flex-col items-end justify-center">
						<label for="user" class="mb-1 h-8">Username: </label>
						<label for="pass" class="mb-1 h-8">Password: </label>
					</div>
					<div class="flex flex-col justify-center">
						<input type="text" name="username" id="user" maxlength="20" class="mb-1 h-8" required />
						<input type="password" name="password" id="pass" class="mb-1 h-8" required />
					</div>
				</div>
				{#if form?.error}
					<p class="error text-red-600">{form.error}</p>
				{/if}
				<div class="flex flex-col items-center space-y-4">
					<button
						type="submit"
						class="drop-drop-shadow-md relative w-max flex-col items-center rounded-lg bg-white text-2xl text-blue-500 transition-transform hover:scale-125"
					>
						Login</button
					>
				</div>
			</form>
		</div>
	</div>
</section>
<div id="iruqjd" class="flex-col"></div>

