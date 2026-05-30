<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Separator } from '$lib/components/ui/separator';
	import SelCanvas from '$lib/components/SelCanvas.svelte';
	import { User, Database, Trophy, ArrowRight } from '@lucide/svelte';

	let { data } = $props();
</script>

<div class="container mx-auto max-w-6xl py-10 px-4 space-y-10">
	<div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
		<div class="space-y-2">
			<h1 class="text-4xl font-extrabold tracking-tight lg:text-5xl">Your Profile</h1>
			<p class="text-muted-foreground text-lg">Manage your Sels and track your progress in the paradise.</p>
		</div>
		<Button href="/sels/profile/manage" size="lg" class="group">
			Manage Sels
			<ArrowRight class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
		</Button>
	</div>

	<div class="grid gap-6 md:grid-cols-3">
		<Card.Root>
			<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
				<Card.Title class="text-sm font-medium">Username</Card.Title>
				<User class="h-4 w-4 text-muted-foreground" />
			</Card.Header>
			<Card.Content>
				<div class="text-2xl font-bold">{data.username}</div>
			</Card.Content>
		</Card.Root>

		<Card.Root>
			<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
				<Card.Title class="text-sm font-medium">Total Sels</Card.Title>
				<Database class="h-4 w-4 text-muted-foreground" />
			</Card.Header>
			<Card.Content>
				<div class="text-2xl font-bold">{data.selCount}</div>
			</Card.Content>
		</Card.Root>

		<Card.Root>
			<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
				<Card.Title class="text-sm font-medium">Highest Rarity</Card.Title>
				<Trophy class="h-4 w-4 text-muted-foreground" />
			</Card.Header>
			<Card.Content>
				<div class="text-2xl font-bold">{data.highestRarityName?.name || 'None'}</div>
			</Card.Content>
		</Card.Root>
	</div>

	<div class="space-y-6">
		<div class="flex items-center gap-2">
			<Trophy class="h-6 w-6 text-primary" />
			<h2 class="text-2xl font-bold tracking-tight">Top 5 Rarest Sels</h2>
		</div>
		<Separator />
		
		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
			{#each { length: 5 } as _, i}
				{@const sel = data.shownSel[i]}
				<Card.Root class="overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 border-2 {sel ? 'border-primary/20' : 'border-dashed border-muted'}">
					<Card.Content class="p-0 aspect-square relative">
						{#if sel}
							<div class="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10 pointer-events-none"></div>
							<div class="h-full w-full p-4">
								<SelCanvas {sel} />
							</div>
						{:else}
							<div class="flex h-full flex-col items-center justify-center bg-muted/30 p-4">
								<p class="text-sm font-medium text-muted-foreground">Empty Slot</p>
							</div>
						{/if}
					</Card.Content>
					<Card.Footer class="p-3 bg-muted/30 border-t">
						<div class="flex items-center justify-between w-full">
							<span class="text-xs font-bold uppercase tracking-wider text-muted-foreground">Rank #{i + 1}</span>
							{#if sel}
								<span class="text-xs font-semibold px-2 py-0.5 rounded-full bg-primary/10 text-primary">Tier {sel.tier_id}</span>
							{/if}
						</div>
					</Card.Footer>
				</Card.Root>
			{/each}
		</div>
	</div>
</div>
