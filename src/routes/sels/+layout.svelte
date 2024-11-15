<script>
	import { page } from '$app/stores';
	let { children } = $props();
	let currentPage = $state('sels/profile');
</script>

<nav class="flex h-12 w-screen flex-row justify-center bg-gray-600">
	<a
		href="./profile"
		class="ml-10 mr-10 mt-3 hover:scale-125 hover:underline hover:underline-offset-2"
		class:active={currentPage === 'sels/profile'}
		onclick={() => (currentPage = 'sels/profile')}>Profile</a
	>
	<a
		href="./gacha"
		class="ml-10 mr-10 mt-3 hover:scale-125 hover:underline hover:underline-offset-2"
		class:active={currentPage === 'sels/gacha'}
		onclick={() => (currentPage = 'sels/gacha')}>Gacha</a
	>
	<a
		href="./trade"
		class="ml-10 mr-10 mt-3 hover:scale-125 hover:underline hover:underline-offset-2"
		class:active={currentPage === 'sels/trade'}
		onclick={() => (currentPage = 'sels/trade')}>Trade</a
	>
	<a
		href={$page.url.pathname}
		class="ml-10 mr-10 mt-3 animate-text bg-gradient-to-r from-indigo-500
            to-red-500 bg-clip-text
            font-bold text-transparent hover:scale-125 hover:underline hover:underline-offset-2"
		>Add Currency</a
	>
</nav>

{@render children()}

<style>
	.active {
		color: greenyellow;
		transition: all;
	}
</style>
