<script lang="ts">
	import { enhance } from '$app/forms';
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import * as Alert from '$lib/components/ui/alert';
	import { Label } from '$lib/components/ui/label';
	import { Separator } from '$lib/components/ui/separator';
	import { 
		Coins, 
		CreditCard, 
		CheckCircle2, 
		AlertCircle, 
		ArrowRight, 
		Wallet,
		ShieldCheck,
		Loader2
	} from '@lucide/svelte';
	import { toast } from 'svelte-sonner';
	import sel_coin from '$lib/sel_coin.gif';

	let { data, form } = $props();
	let loading = $state(false);
	let selectedPack = $state("3000");
	let paymentMethod = $state("paypal");

	const currencyPacks = [
		{ id: "3000", amount: 3000, price: 0.99, label: "Starter Pack", bonus: 0, popular: false },
		{ id: "30000", amount: 30000, price: 8.99, label: "Value Pack", bonus: 10, popular: true },
		{ id: "300000", amount: 300000, price: 79.99, label: "Legendary Pack", bonus: 25, popular: false },
	];

	const paymentMethods = [
		{ id: "paypal", label: "PayPal", icon: Wallet },
		{ id: "truemoney", label: "TrueMoney", icon: CreditCard },
		{ id: "visa", label: "Visa / Master", icon: CreditCard },
	];

	$effect(() => {
		if (form?.success) {
			toast.success(`Purchase successful! Added ${form.amount.toLocaleString()} SPC.`);
		} else if (form?.error) {
			toast.error(form.error);
		}
	});
</script>

<div class="container mx-auto max-w-6xl px-4 py-10 space-y-12">
	<div class="text-center space-y-4">
		<h1 class="text-4xl font-extrabold tracking-tight lg:text-5xl text-primary">Get More SPC</h1>
		<p class="text-xl text-muted-foreground max-w-2xl mx-auto">
			Securely add currency to your account to get the rarest Sels and dominate the marketplace.
		</p>
	</div>

	<div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
		<!-- Step 1: Select Pack -->
		<div class="lg:col-span-2 space-y-6">
			<div class="flex items-center gap-2 mb-4">
				<div class="h-6 w-6 rounded-full border flex items-center justify-center font-bold text-xs">1</div>
				<h2 class="text-2xl font-bold">Select Currency Pack</h2>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
				{#each currencyPacks as pack}
					<button 
						onclick={() => selectedPack = pack.id}
						class="text-left transition-all outline-none"
					>
						<Card.Root class="relative overflow-hidden cursor-pointer border-2 transition-all hover:border-primary/50 {selectedPack === pack.id ? 'border-primary ring-2 ring-primary/20' : ''}">
							{#if pack.popular}
								<div class="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] font-bold px-2 py-1 rounded-bl-lg">
									MOST POPULAR
								</div>
							{/if}
							<Card.Header class="pb-2">
								<Card.Title class="text-lg">{pack.label}</Card.Title>
								<Card.Description>{pack.amount.toLocaleString()} SPC</Card.Description>
							</Card.Header>
							<Card.Content class="pb-4">
								<div class="flex items-baseline gap-1">
									<span class="text-3xl font-bold">${pack.price}</span>
									<span class="text-xs text-muted-foreground">USD</span>
								</div>
								{#if pack.bonus > 0}
									<div class="mt-2 inline-flex items-center text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full dark:bg-green-900/20 dark:text-green-400">
										+{pack.bonus}% BONUS
									</div>
								{/if}
							</Card.Content>
						</Card.Root>
					</button>
				{/each}
			</div>

			<div class="pt-8">
				<div class="flex items-center gap-2 mb-6">
					<div class="h-6 w-6 rounded-full border flex items-center justify-center font-bold text-xs">2</div>
					<h2 class="text-2xl font-bold">Choose Payment Method</h2>
				</div>

				<div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
					{#each paymentMethods as method}
						<button
							type="button"
							onclick={() => paymentMethod = method.id}
							class="flex items-center justify-between border-2 rounded-xl p-4 cursor-pointer transition-all hover:bg-muted/50 {paymentMethod === method.id ? 'border-primary bg-primary/5' : ''}"
						>
							<div class="flex items-center gap-3">
								<div class="p-2 rounded-lg bg-background border">
									<method.icon class="h-5 w-5" />
								</div>
								<span class="font-bold text-sm">{method.label}</span>
							</div>
							{#if paymentMethod === method.id}
								<CheckCircle2 class="h-4 w-4 text-primary" />
							{/if}
						</button>
					{/each}
				</div>
			</div>
		</div>

		<!-- Step 3: Summary & Checkout -->
		<div class="space-y-6">
			<div class="flex items-center gap-2 mb-4">
				<div class="h-6 w-6 rounded-full border flex items-center justify-center font-bold text-xs">3</div>
				<h2 class="text-2xl font-bold">Order Summary</h2>
			</div>

			<Card.Root>
				<Card.Content class="pt-6 space-y-4">
					{@const currentPack = currencyPacks.find(p => p.id === selectedPack)}
					<div class="flex justify-between items-center text-sm">
						<span class="text-muted-foreground">Pack</span>
						<span class="font-medium">{currentPack?.label}</span>
					</div>
					<div class="flex justify-between items-center text-sm">
						<span class="text-muted-foreground">Amount</span>
						<span class="font-medium">{currentPack?.amount.toLocaleString()} SPC</span>
					</div>
					<div class="flex justify-between items-center text-sm">
						<span class="text-muted-foreground">Payment Method</span>
						<span class="font-medium uppercase">{paymentMethod}</span>
					</div>
					
					<Separator />
					
					<div class="flex justify-between items-center pt-2">
						<span class="text-lg font-bold">Total</span>
						<span class="text-2xl font-extrabold text-primary">${currentPack?.price}</span>
					</div>

					<div class="bg-muted/50 p-4 rounded-lg flex items-start gap-3 mt-4">
						<ShieldCheck class="h-5 w-5 text-primary shrink-0" />
						<p class="text-[10px] leading-relaxed text-muted-foreground">
							Your transaction is encrypted and secure. We do not store your payment information on our servers.
						</p>
					</div>

					<form 
						method="post" 
						use:enhance={() => {
							loading = true;
							return async ({ update }) => {
								await update();
								loading = false;
							};
						}}
						class="pt-4"
					>
						<input type="hidden" name="amount" value={currentPack?.amount} />
						<input type="hidden" name="price" value={currentPack?.price} />
						<input type="hidden" name="method" value={paymentMethod} />
						
						<Button type="submit" class="w-full h-12 text-lg font-bold group" disabled={loading}>
							{#if loading}
								<Loader2 class="mr-2 h-5 w-5 animate-spin" />
								Processing...
							{:else}
								Purchase Now
								<ArrowRight class="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
							{/if}
						</Button>
					</form>
				</Card.Content>
			</Card.Root>

			{#if form?.success}
				<Alert.Root class="bg-primary/10 border-primary/20">
					<CheckCircle2 class="h-4 w-4 text-primary" />
					<Alert.Title>Payment Confirmed!</Alert.Title>
					<Alert.Description>
						Order #{form.orderId.substring(0, 8)} has been completed.
					</Alert.Description>
				</Alert.Root>
			{/if}
		</div>
	</div>
</div>
