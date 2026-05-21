<script lang="ts">
	import { page } from '$app/stores';
	let { children, data } = $props();
	import sel_banner from '$lib/sel_banner.png';
	import sel_coin from '$lib/sel_coin.gif';
</script>

<div class="gjs-image-banner">
	<img src={sel_banner} class="gjs-image-banner" alt="" />
</div>
<nav class="flex h-14 w-screen flex-row justify-around bg-gray-700 text-xl">
	<a
		href="/sels/profile"
		class="ml-10 mr-10 mt-3 text-white transition-all hover:scale-125"
		class:active={$page.url.pathname === '/sels/profile' ||
			$page.url.pathname === '/sels/profile/manage'}>Profile</a
	>
	<a
		href="/sels/gacha"
		class="ml-10 mr-10 mt-3 text-white transition-all hover:scale-125"
		class:active={$page.url.pathname === '/sels/gacha'}>Gacha</a
	>
	<a
		href={$page.url.pathname}
		class="ml-10 mr-10 mt-3 text-white transition-all hover:scale-125"
		class:active={$page.url.pathname === '/sels/trade'}>Trade [WIP]</a
	>
	<a
		href="/sels/addcurrency"
		class="ml-10 mr-10 mt-3 animate-text bg-linear-to-r from-indigo-500
            to-red-500 bg-clip-text
            font-bold text-transparent transition-all hover:scale-125"
		class:active={$page.url.pathname === '/sels/addcurrency'}>Add Currency</a
	>
	{#if data.isAdmin}
		<a
			href="/admin"
			class="ml-10 mr-10 mt-3 animate-text bg-linear-to-r from-green-500
	to-blue-500 bg-clip-text
	font-bold text-transparent transition-all hover:scale-125">Admin Page</a
		>
	{:else if data.isDev}
		<a
			href="/dev"
			class="ml-10 mr-10 mt-3 animate-text bg-linear-to-r from-green-500
	to-blue-500 bg-clip-text
	font-bold text-transparent transition-all hover:scale-125">Developer Page</a
		>
	{/if}
	<div class="flex min-w-10 flex-row">
		<p class="ml-10 mr-0 mt-3 text-right text-green-400">
			SPC: {data.accountCurrency}
		</p>

		<div class="flex flex-row items-center">
			<img src={sel_coin} class="inline h-10 w-10" alt="" />
		</div>
	</div>
	<a
		href="/signout"
		data-sveltekit-preload-data="tap"
		class="ml-10 mr-10 mt-3 font-bold text-red-500
			transition-all hover:scale-125">Signout</a
	>
</nav>

{@render children()}

<style>
	.active {
		color: greenyellow;
		transition-property: all;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 150ms;
	}
</style>
