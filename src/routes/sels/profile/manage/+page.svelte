<script lang="ts">
	import { enhance } from '$app/forms';
	let { form, data } = $props();
	let feedReady = $state(false);
	let playReady = $state(false);
	let showReady = $state(false);
	let feedDiff = new Date().getTime() - data.lastFeed.getTime();
	let playDiff = new Date().getTime() - data.lastPlay.getTime();
	let showDiff = new Date().getTime() - data.lastShow.getTime();
	let feedTimer: string = $state('');
	let playTimer: string = $state('');
	let showTimer: string = $state('');

	if (feedDiff > 1000 * 60 * 60) {
		feedReady = true;
	} else {
		setInterval(function () {
			feedTimer = feedDiff.toString();
			return feedTimer;
		}, 1000);
	}

	if (playDiff > 1000 * 60 * 60) {
		playReady = true;
	} else {
		setInterval(function () {
			playTimer = playDiff.toString();
			return playTimer;
		}, 1000);
	}

	if (showDiff > 1000 * 60 * 60) {
		showReady = true;
	} else {
		setInterval(function () {
			showTimer = showDiff.toString();
			return showTimer;
		}, 1000);
	}

	import sel_banner from '$lib/sel_banner.png';
</script>

<div id="ilw2j" class="gjs-image-box mb-10">
	<img src={sel_banner} class="gjs-image-box" alt="" />
</div>
<form method="post" use:enhance>
	<div class="flex min-h-60 flex-row justify-center gap-10 align-middle">
		<div>
			<button
				type="submit"
				class="mb-2 size-40 outline outline-1 hover:scale-110"
				name="click"
				value="play">Play with Sels</button
			>
			{#if data.validPlay === false || form?.validPlay === false}
				<p class="text-red-400">Play on cooldown.</p>
			{:else if form?.successPlay}
				<p class="text-green-400">Play Successful</p>
			{/if}
		</div>
		<div>
			<button
				type="submit"
				class="mb-2 size-40 outline outline-1 hover:scale-110"
				name="click"
				value="show">Host Sels show</button
			>
			{#if data.validShow === false || form?.validShow === false}
				<p class="text-red-400">Show on cooldown.</p>
			{:else if form?.successShow}
				<p class="text-green-400">Show Successful</p>
			{/if}
		</div>
		<div>
			<button
				type="submit"
				class="mb-2 size-40 outline outline-1 hover:scale-110"
				name="click"
				value="feed">Feed Sels</button
			>
			{#if data.validFeed === false || form?.validFeed === false}
				<p class="text-red-400">Feed on cooldown.</p>
			{:else if form?.successFeed}
				<p class="text-green-400">Feed Successful</p>
			{/if}
		</div>
		{#if feedReady}
			<!-- content here -->
		{/if}
	</div>
	<p id="feed" class="min-w-12">{feedTimer}</p>
	<p id="play" class="min-w-12"></p>
	<p id="show" class="min-w-12"></p>
</form>
