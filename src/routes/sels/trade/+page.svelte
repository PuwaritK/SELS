<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs';
	import * as Card from '$lib/components/ui/card';
	import * as AlertDialog from '$lib/components/ui/alert-dialog';
	import { Button, buttonVariants } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import SelCanvas from '$lib/components/SelCanvas.svelte';
	import { enhance } from '$app/forms';
	import { toast } from 'svelte-sonner';

	let { data, form } = $props();

	$effect(() => {
		if (form?.message) {
			if (form.success) {
				toast.success(form.message);
			} else {
				toast.error(form.message);
			}
		}
	});

	let marketplaceSels = $derived(data.marketplaceSels);
	let userSels = $derived(data.userSels);

	let selToBuy = $state<any>(null);
	let buyDialogOpen = $state(false);

	function openBuyDialog(sel: any) {
		selToBuy = sel;
		buyDialogOpen = true;
	}
</script>

{#snippet selCard(sel: any, isMarketplace: boolean)}
	<Card.Root class="overflow-hidden">
		<Card.Header class="p-0">
			<div class="bg-muted/20 aspect-square w-full">
				<SelCanvas {sel} />
			</div>
		</Card.Header>
		<Card.Content class="p-4">
			<Card.Title class="text-lg">{sel.name || 'Unnamed Sel'}</Card.Title>
			<div class="text-muted-foreground mt-2 space-y-1 text-sm">
				<p>Type: {sel.type?.type_name}</p>
				<p>Tier: {sel.tier?.name}</p>
				<p>Sex: {sel.sex?.name}</p>
				{#if isMarketplace}
					<p class="text-foreground font-bold">Price: {sel.price} SPC</p>
				{:else if sel.price > 0}
					<p class="text-primary font-semibold">Listed for: {sel.price} SPC</p>
				{/if}
			</div>
		</Card.Content>
		<Card.Footer class="p-4 pt-0">
			{#if isMarketplace}
				<Button class="w-full" onclick={() => openBuyDialog(sel)}>Buy Sel</Button>
			{:else if sel.price > 0}
				<form method="POST" action="?/unlist" use:enhance class="w-full">
					<input type="hidden" name="selId" value={sel.sel_id} />
					<Button variant="outline" type="submit" class="w-full">Unlist</Button>
				</form>
			{:else}
				<form method="POST" action="?/list" use:enhance class="w-full space-y-2">
					<input type="hidden" name="selId" value={sel.sel_id} />
					<div class="flex gap-2">
						<Input type="number" name="price" placeholder="Price" min="1" required class="h-9" />
						<Button type="submit" size="sm">List</Button>
					</div>
				</form>
			{/if}
		</Card.Footer>
	</Card.Root>
{/snippet}

<div class="container mx-auto px-4 py-10">
	<div class="mb-8 flex items-center justify-between">
		<div>
			<h1 class="text-4xl font-bold tracking-tight">Trade Center</h1>
			<p class="text-muted-foreground">Buy and sell Sels with other players.</p>
		</div>
		<div class="bg-primary/10 border-primary/20 rounded-lg border px-4 py-2">
			<span class="text-sm font-medium">Balance:</span>
			<span class="text-primary ml-2 text-lg font-bold">{data.currency} SPC</span>
		</div>
	</div>

	<Tabs.Root value="marketplace" class="w-full">
		<Tabs.List class="grid w-full max-md:max-w-md grid-cols-2">
			<Tabs.Trigger value="marketplace">Marketplace</Tabs.Trigger>
			<Tabs.Trigger value="inventory">My Sels</Tabs.Trigger>
		</Tabs.List>

		<Tabs.Content value="marketplace" class="mt-6">
			{#if marketplaceSels.length === 0}
				<div
					class="text-muted-foreground flex h-60 flex-col items-center justify-center rounded-xl border border-dashed"
				>
					<p>No Sels currently for sale.</p>
				</div>
			{:else}
				<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					{#each marketplaceSels as sel (sel.sel_id)}
						{@render selCard(sel, true)}
					{/each}
				</div>
				<p class="text-muted-foreground mt-8 text-center text-sm">Showing top 30 listings.</p>
			{/if}
		</Tabs.Content>

		<Tabs.Content value="inventory" class="mt-6">
			{#if userSels.length === 0}
				<div
					class="text-muted-foreground flex h-60 flex-col items-center justify-center rounded-xl border border-dashed"
				>
					<p>You don't have any Sels in your paradise.</p>
					<Button variant="link" href="/sels/gacha" class="mt-2">Go to Gacha</Button>
				</div>
			{:else}
				<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					{#each userSels as sel (sel.sel_id)}
						{@render selCard(sel, false)}
					{/each}
				</div>
			{/if}
		</Tabs.Content>
	</Tabs.Root>
</div>

<AlertDialog.Root bind:open={buyDialogOpen}>
	<AlertDialog.Content>
		<AlertDialog.Header>
			<AlertDialog.Title>Confirm Purchase</AlertDialog.Title>
			<AlertDialog.Description>
				{#if selToBuy}
					Are you sure you want to buy <span class="font-bold text-foreground"
						>{selToBuy.name || 'this Sel'}</span
					>
					for <span class="font-bold text-foreground">{selToBuy.price} SPC</span>?
				{/if}
			</AlertDialog.Description>
		</AlertDialog.Header>
		<AlertDialog.Footer>
			<AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
			{#if selToBuy}
				<form method="POST" action="?/buy" use:enhance={() => { buyDialogOpen = false; return async ({ update }) => { await update(); }; }}>
					<input type="hidden" name="selId" value={selToBuy.sel_id} />
					<Button type="submit">Confirm</Button>
				</form>
			{/if}
		</AlertDialog.Footer>
	</AlertDialog.Content>
</AlertDialog.Root>
