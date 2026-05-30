<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Separator } from '$lib/components/ui/separator';
	import SelCanvas from '$lib/components/SelCanvas.svelte';
	import { User, Database, Trophy, ArrowRight, Weight, Zap, Info } from '@lucide/svelte';

	let { data } = $props();
</script>

<div class="container mx-auto max-w-6xl space-y-10 px-4 py-10">
	<div class="flex flex-col justify-between gap-6 md:flex-row md:items-end">
		<div class="space-y-2">
			<h1 class="text-4xl font-extrabold tracking-tight lg:text-5xl">Your Profile</h1>
			<p class="text-muted-foreground text-lg">
				Manage your Sels and track your progress in the paradise.
			</p>
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
				<User class="text-muted-foreground h-4 w-4" />
			</Card.Header>
			<Card.Content>
				<div class="text-2xl font-bold">{data.username}</div>
			</Card.Content>
		</Card.Root>

		<Card.Root>
			<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
				<Card.Title class="text-sm font-medium">Total Sels</Card.Title>
				<Database class="text-muted-foreground h-4 w-4" />
			</Card.Header>
			<Card.Content>
				<div class="text-2xl font-bold">{data.selCount}</div>
			</Card.Content>
		</Card.Root>

		<Card.Root>
			<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
				<Card.Title class="text-sm font-medium">Highest Rarity</Card.Title>
				<Trophy class="text-muted-foreground h-4 w-4" />
			</Card.Header>
			<Card.Content>
				<div class="text-2xl font-bold">{data.highestRarityName?.name || 'None'}</div>
			</Card.Content>
		</Card.Root>
	</div>

	<div class="space-y-6">
		<div class="flex items-center gap-2">
			<Trophy class="text-primary h-6 w-6" />
			<h2 class="text-2xl font-bold tracking-tight">Top 5 Rarest Sels</h2>
		</div>
		<Separator />

		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
			{#each { length: 5 } as _, i}
				{@const sel = data.shownSel[i]}
				<Card.Root
					class="overflow-hidden border-2 transition-all hover:-translate-y-1 hover:shadow-lg {sel
						? 'border-primary/20'
						: 'border-muted border-dashed'}"
				>
					<Card.Content class="relative aspect-square p-0">
						{#if sel}
							<div
								class="from-background/80 pointer-events-none absolute inset-0 z-10 to-transparent"
							></div>
							<div class="h-full w-full p-4">
								<SelCanvas {sel} />
							</div>
						{:else}
							<div class="bg-muted/30 flex h-full flex-col items-center justify-center p-4">
								<p class="text-muted-foreground text-sm font-medium">Empty Slot</p>
							</div>
						{/if}
					</Card.Content>
					{#if sel}
						<Card.Header class="space-y-1 p-4">
							<Card.Title class="truncate text-base">{sel.name || 'Unnamed Sel'}</Card.Title>
							<Card.Description class="flex items-center gap-1.5 text-xs">
								<Info class="h-3 w-3" />
								{sel.type?.type_name} • {sel.sex?.name}
							</Card.Description>
						</Card.Header>
						<Card.Content class="px-4 pt-0 pb-4">
							<div class="text-muted-foreground flex items-center justify-between text-xs">
								<div class="flex items-center gap-1">
									<Weight class="h-3 w-3" />
									<span>{sel.weight.toFixed(1)}kg</span>
								</div>
								<div class="flex items-center gap-1">
									<Zap class="h-3 w-3" />
									<span>{sel.show_xp} XP</span>
								</div>
							</div>
						</Card.Content>
					{/if}
					<Card.Footer class="bg-muted/30 border-t p-3">
						<div class="flex w-full items-center justify-between">
							<span class="text-muted-foreground text-xs font-bold tracking-wider uppercase"
								>Rank #{i + 1}</span
							>
							{#if sel}
								<span
									class="bg-primary/10 text-primary rounded-full px-2 py-0.5 text-xs font-semibold"
									>{sel.tier?.name || `Tier ${sel.tier_id}`}</span
								>
							{/if}
						</div>
					</Card.Footer>
				</Card.Root>
			{/each}
		</div>
	</div>
</div>
