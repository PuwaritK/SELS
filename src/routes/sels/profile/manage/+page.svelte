<script lang="ts">
	import { enhance } from '$app/forms';
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import * as Alert from '$lib/components/ui/alert';
	import {
		Gamepad2,
		Users,
		Utensils,
		Timer,
		CheckCircle2,
		AlertCircle,
		ArrowLeft
	} from '@lucide/svelte';

	let { form, data } = $props();

	let now = $state(Date.now());

	$effect(() => {
		const interval = setInterval(() => {
			now = Date.now();
		}, 1000);
		return () => clearInterval(interval);
	});

	function formatTime(diff: number): string {
		if (diff <= 0) return '00:00:00';
		const hours = Math.floor(diff / (1000 * 60 * 60));
		const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((diff % (1000 * 60)) / 1000);
		return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
	}

	let feedReady = $derived(new Date(data.lastFeed).getTime() + 60 * 60 * 1000 <= now);
	let playReady = $derived(new Date(data.lastPlay).getTime() + 60 * 60 * 1000 <= now);
	let showReady = $derived(new Date(data.lastShow).getTime() + 60 * 60 * 1000 <= now);

	let feedTimer = $derived(formatTime(new Date(data.lastFeed).getTime() + 60 * 60 * 1000 - now));
	let playTimer = $derived(formatTime(new Date(data.lastPlay).getTime() + 60 * 60 * 1000 - now));
	let showTimer = $derived(formatTime(new Date(data.lastShow).getTime() + 60 * 60 * 1000 - now));
</script>

<div class="container mx-auto max-w-4xl space-y-8 px-4 py-10">
	<div class="flex items-center gap-4">
		<Button href="/sels/profile" variant="ghost" size="icon">
			<ArrowLeft class="h-4 w-4" />
		</Button>
		<div class="space-y-1">
			<h1 class="text-3xl font-bold">Manage Your Sels</h1>
			<p class="text-muted-foreground">
				Interact with your Sels to earn rewards and keep them happy.
			</p>
		</div>
	</div>

	{#if form?.successPlay || form?.successShow || form?.successFeed}
		<Alert.Root class="border-primary/20 bg-primary/10">
			<CheckCircle2 class="h-4 w-4" />
			<Alert.Title>Action Successful!</Alert.Title>
			<Alert.Description>
				{#if form.successPlay}
					Gained {form.playResult} SPC from playing.
				{/if}
				{#if form.successShow}
					Gained {form.showResult} SPC from the show.
				{/if}
				{#if form.successFeed}
					Paid {form.feedResult} SPC to feed your Sels.
				{/if}
			</Alert.Description>
		</Alert.Root>
	{/if}

	<form method="post" use:enhance class="grid gap-6 md:grid-cols-3">
		<!-- Play Card -->
		<Card.Root class="flex h-full flex-col">
			<Card.Header>
				<div class="flex items-center justify-between">
					<div class="rounded-lg bg-red-100 p-2 dark:bg-red-900/30">
						<Gamepad2 class="h-6 w-6 text-red-600 dark:text-red-400" />
					</div>
					{#if !playReady}
						<div class="text-muted-foreground flex items-center gap-1.5 text-xs font-medium">
							<Timer class="h-3 w-3" />
							{playTimer}
						</div>
					{/if}
				</div>
				<Card.Title class="mt-4">Play with Sels</Card.Title>
				<Card.Description>Spend time with your Sels to earn SPC.</Card.Description>
			</Card.Header>
			<Card.Content class="grow">
				{#if !playReady}
					<p class="text-destructive flex items-center gap-1 text-sm font-medium">
						<AlertCircle class="h-4 w-4" />
						On Cooldown
					</p>
				{:else}
					<p class="text-primary flex items-center gap-1 text-sm font-medium">
						<CheckCircle2 class="h-4 w-4" />
						Ready to Play!
					</p>
				{/if}
			</Card.Content>
			<Card.Footer>
				<Button
					type="submit"
					name="click"
					value="play"
					class="w-full"
					variant={playReady ? 'default' : 'outline'}
					disabled={!playReady}
				>
					Play Now
				</Button>
			</Card.Footer>
		</Card.Root>

		<!-- Show Card -->
		<Card.Root class="flex h-full flex-col">
			<Card.Header>
				<div class="flex items-center justify-between">
					<div class="rounded-lg bg-pink-100 p-2 dark:bg-pink-900/30">
						<Users class="h-6 w-6 text-pink-600 dark:text-pink-400" />
					</div>
					{#if !showReady}
						<div class="text-muted-foreground flex items-center gap-1.5 text-xs font-medium">
							<Timer class="h-3 w-3" />
							{showTimer}
						</div>
					{/if}
				</div>
				<Card.Title class="mt-4">Host Sel Show</Card.Title>
				<Card.Description>Showcase your Sels to the public for rewards.</Card.Description>
			</Card.Header>
			<Card.Content class="grow">
				{#if !showReady}
					<p class="text-destructive flex items-center gap-1 text-sm font-medium">
						<AlertCircle class="h-4 w-4" />
						On Cooldown
					</p>
				{:else}
					<p class="text-primary flex items-center gap-1 text-sm font-medium">
						<CheckCircle2 class="h-4 w-4" />
						Ready for Show!
					</p>
				{/if}
			</Card.Content>
			<Card.Footer>
				<Button
					type="submit"
					name="click"
					value="show"
					class="w-full"
					variant={showReady ? 'default' : 'outline'}
					disabled={!showReady}
				>
					Host Show
				</Button>
			</Card.Footer>
		</Card.Root>

		<!-- Feed Card -->
		<Card.Root class="flex h-full flex-col">
			<Card.Header>
				<div class="flex items-center justify-between">
					<div class="rounded-lg bg-blue-100 p-2 dark:bg-blue-900/30">
						<Utensils class="h-6 w-6 text-blue-600 dark:text-blue-400" />
					</div>
					{#if !feedReady}
						<div class="text-muted-foreground flex items-center gap-1.5 text-xs font-medium">
							<Timer class="h-3 w-3" />
							{feedTimer}
						</div>
					{/if}
				</div>
				<Card.Title class="mt-4">Feed Sels</Card.Title>
				<Card.Description>Keep your Sels healthy and happy by feeding them.</Card.Description>
			</Card.Header>
			<Card.Content class="grow">
				{#if !feedReady}
					<p class="text-destructive flex items-center gap-1 text-sm font-medium">
						<AlertCircle class="h-4 w-4" />
						On Cooldown
					</p>
				{:else}
					<p class="text-primary flex items-center gap-1 text-sm font-medium">
						<CheckCircle2 class="h-4 w-4" />
						Ready to Feed!
					</p>
				{/if}
			</Card.Content>
			<Card.Footer>
				<Button
					type="submit"
					name="click"
					value="feed"
					class="w-full"
					variant={feedReady ? 'default' : 'outline'}
					disabled={!feedReady}
				>
					Feed All
				</Button>
			</Card.Footer>
		</Card.Root>
	</form>
</div>
