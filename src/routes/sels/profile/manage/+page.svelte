<script lang="ts">
	import { enhance } from '$app/forms';
	let { form, data } = $props();

	let feedReady = $state(false);
	let playReady = $state(false);
	let showReady = $state(false);

	let feedDiff =
		new Date(data.lastFeed.getTime() + 60 * 60 * 1000).getTime() - new Date().getTime();
	let playDiff =
		new Date(data.lastPlay.getTime() + 60 * 60 * 1000).getTime() - new Date().getTime();
	let showDiff =
		new Date(data.lastShow.getTime() + 60 * 60 * 1000).getTime() - new Date().getTime();

	let feedTimer = $state('');
	let playTimer = $state('');
	let showTimer = $state('');

	let feedInterval: number | null = $state(null);
	let playInterval: number | null = $state(null);
	let showInterval: number | null = $state(null);

	function formatTime(diff: number): string {
		const hours = Math.floor(diff / (1000 * 60 * 60));
		const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((diff % (1000 * 60)) / 1000);
		return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
	}

	function startTimer(
		diff: number,
		setTimer: (value: string) => void,
		setReady: (value: boolean) => void
	): number | null {
		if (diff > 1000 * 60 * 60) {
			setReady(true);
			return null;
		}

		setReady(false);
		return setInterval(() => {
			diff -= 1000;
			if (diff <= 0) {
				setTimer('00:00:00');
				setReady(true);
			} else {
				setTimer(formatTime(diff));
			}
		}, 1000) as unknown as number;
	}

	if (feedDiff > 1000 * 60 * 60) {
		feedReady = true;
	} else {
		feedInterval = startTimer(
			feedDiff,
			(time) => (feedTimer = time),
			(ready) => (feedReady = ready)
		);
	}

	if (playDiff > 1000 * 60 * 60) {
		playReady = true;
	} else {
		playInterval = startTimer(
			playDiff,
			(time) => (playTimer = time),
			(ready) => (playReady = ready)
		);
	}

	if (showDiff > 1000 * 60 * 60) {
		showReady = true;
	} else {
		showInterval = startTimer(
			showDiff,
			(time) => (showTimer = time),
			(ready) => (showReady = ready)
		);
	}
</script>

<div class="h-dvh bg-green-50 pt-10">
	<form method="post" use:enhance>
		<div class="flex min-h-60 flex-row justify-evenly gap-10 align-middle">
			<div>
				<button
					type="submit"
					class="mb-2 size-40 rounded-lg bg-red-100 text-xl outline outline-1 transition-all hover:scale-110"
					name="click"
					value="play">Play with Sels</button
				>
				{#if form?.playResult}
					<p class="text-green-400">Play Successful, gained {form.playResult} SPC.</p>
				{/if}
				{#if data.validPlay === false || form?.validPlay === false}
					<p class="text-red-400">Play on cooldown.</p>
					<p id="play" class="min-w-12">Time until play: {playTimer}</p>
				{:else}
					<p class="text-green-400">Play Ready!</p>
				{/if}
			</div>
			<div>
				<button
					type="submit"
					class="mb-2 size-40 rounded-lg bg-pink-100 text-xl outline outline-1 transition-all hover:scale-110"
					name="click"
					value="show">Host Sels show</button
				>
				{#if form?.showResult}
					<p class="text-green-400">Show Successful, gained {form.showResult} SPC.</p>
				{/if}
				{#if data.validShow === false || form?.validShow === false}
					<p class="text-red-400">Show on cooldown.</p>
					<p id="show" class="min-w-12">Time until show: {showTimer}</p>
				{:else}
					<p class="text-green-400">Show Ready!</p>
				{/if}
			</div>
			<div>
				<button
					type="submit"
					class="mb-2 size-40 rounded-lg bg-blue-100 text-xl outline outline-1 transition-all hover:scale-110"
					name="click"
					value="feed">Feed Sels</button
				>
				{#if form?.feedResult}
					<p class="text-green-400">Feed Successful, paid {form.feedResult} SPC.</p>
				{/if}
				{#if data.validFeed === false || form?.validFeed === false}
					<p class="text-red-400">Feed on cooldown.</p>
					<p id="feed" class="min-w-12">Time until feed: {feedTimer}</p>
				{:else}
					<p class="text-green-400">Feed Ready!</p>
				{/if}
			</div>
		</div>
	</form>
</div>
