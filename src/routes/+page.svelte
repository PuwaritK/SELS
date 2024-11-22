<script lang="ts">
	let { data } = $props();
</script>

<div class=" min-h-screen w-screen bg-gray-400">
	<div class="relative flex flex-col items-center space-y-8 bg-gray-200 pb-7">
		<div class="font-serif text-8xl font-bold">
			<h1>Welcome to SELS</h1>
		</div>
		<div class="space-y-8 text-center align-middle font-serif text-4xl">
			<p>A fantasy game that will feed your gambling addiction.</p>
			<p>Login or signup now.</p>
		</div>
		{#if !data.isSignedIn}
			<div class="col-span-2 flex">
				<div
					class="mr-4 flex-row rounded-lg bg-white text-2xl text-blue-500 drop-shadow-md transition-transform hover:scale-125"
				>
					<a href="./signup">Sign Up</a>
				</div>
				<div
					class="drop-drop-shadow-md ml-4 flex-row rounded-lg bg-white text-2xl text-blue-500 transition-transform hover:scale-125"
				>
					<a href="./signin">Sign In</a>
				</div>
			</div>
		{:else}
			<div class="flex content-evenly justify-center">
				<p>{data.signedInAs}</p>
				<br />
			</div>
			<div
				class="mr-4 flex-row rounded-lg bg-white text-2xl text-blue-500 drop-shadow-md transition-transform hover:scale-125"
			>
				<a href="./sels/profile" class="font-bold text-blue-400">Proceed to SELS</a>
			</div>
		{/if}
	</div>
</div>
