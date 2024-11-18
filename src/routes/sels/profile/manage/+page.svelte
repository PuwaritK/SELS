<script lang="ts">
	import { enhance } from '$app/forms';
	let { form, data } = $props();
	let feedReady = $state(false);
	let feedDiff = new Date().getTime() - data.lastFeed.getTime();
	let playDiff = new Date().getTime() - data.lastPlay.getTime();
	let showDiff = new Date().getTime() - data.lastShow.getTime();
	let feedTimer: string;
	if (feedDiff > 1000 * 60 * 60) {
		feedReady = true;
	} else {
		setInterval(function () {
			feedTimer = feedDiff.toString();
			return feedTimer;
		}, 1000);
	}
	if (playDiff > 1000 * 60 * 60) {
		feedReady = true;
	} else {
		setInterval(function () {
			document.getElementById('play')!.innerHTML = playDiff.toString();
		}, 1000);
	}
	if (showDiff > 1000 * 60 * 60) {
		feedReady = true;
	} else {
		setInterval(function () {
			document.getElementById('show')!.innerHTML = showDiff.toString();
		}, 1000);
	}
</script>

<div class="flex min-h-60 flex-row justify-center align-middle">
	<form method="post" use:enhance>
		<button type="submit" class="size-20" name="click" value="play">Play with Sels</button>
		{#if !form?.validPlay}
			<p>You're on cool down.</p>
		{/if}
		<button type="submit" class="size-20" name="click" value="show">Host Sels show</button>
		{#if !form?.validShow}
			<p>You're on cool down.</p>
		{/if}
		<button type="submit" class="size-20" name="click" value="feed">Feed Sels</button>
		{#if !form?.validFeed}
			<p>You're on cool down.</p>
		{/if}
	</form>
	{#if feedReady}
		<!-- content here -->
	{/if}
	<p id="feed" class="top-2/4 min-w-12">{feedTimer}</p>
	<p id="play" class="min-w-12"></p>
	<p id="show" class="min-w-12"></p>
</div>
