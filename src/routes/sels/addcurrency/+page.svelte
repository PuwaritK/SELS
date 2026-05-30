<script lang="ts">
	import { enhance } from '$app/forms';
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import * as Alert from '$lib/components/ui/alert';
	import { Separator } from '$lib/components/ui/separator';
	import {
		CreditCard,
		CheckCircle2,
		ArrowRight,
		Wallet,
		ShieldCheck,
		Loader2
	} from '@lucide/svelte';
	import { toast } from 'svelte-sonner';

	let { form } = $props();
	let loading = $state(false);
	let selectedPack = $state('3000');
	let paymentMethod = $state('paypal');

	const currencyPacks = [
		{ id: '3000', amount: 3000, price: 0.99, label: 'Starter Pack', bonus: 0, popular: false },
		{ id: '30000', amount: 30000, price: 8.99, label: 'Value Pack', bonus: 10, popular: true },
		{
			id: '300000',
			amount: 300000,
			price: 79.99,
			label: 'Legendary Pack',
			bonus: 25,
			popular: false
		}
	];

	const paymentMethods = [
		{ id: 'paypal', label: 'PayPal', icon: Wallet },
		{ id: 'truemoney', label: 'TrueMoney', icon: CreditCard },
		{ id: 'visa', label: 'Visa / Master', icon: CreditCard }
	];

	$effect(() => {
		if (form?.success) {
			toast.success(`Purchase successful! Added ${form.amount.toLocaleString()} SPC.`);
		} else if (form?.error) {
			toast.error(form.error);
		}
	});
</script>

<div class="container mx-auto max-w-6xl space-y-12 px-4 py-10">
	<div class="space-y-4 text-center">
		<h1 class="text-primary text-4xl font-extrabold tracking-tight lg:text-5xl">Get More SPC</h1>
		<p class="text-muted-foreground mx-auto max-w-2xl text-xl">
			Securely add currency to your account to get the rarest Sels and dominate the marketplace.
		</p>
	</div>

	<div class="grid grid-cols-1 items-start gap-8 lg:grid-cols-3">
		<!-- Step 1: Select Pack -->
		<div class="space-y-6 lg:col-span-2">
			<div class="mb-4 flex items-center gap-2">
				<div class="flex h-6 w-6 items-center justify-center rounded-full border text-xs font-bold">
					1
				</div>
				<h2 class="text-2xl font-bold">Select Currency Pack</h2>
			</div>

			<div class="grid grid-cols-1 gap-4 md:grid-cols-3">
				{#each currencyPacks as pack}
					<button
						onclick={() => (selectedPack = pack.id)}
						class="text-left transition-all outline-none"
					>
						<Card.Root
							class="hover:border-primary/50 relative cursor-pointer overflow-hidden border-2 transition-all {selectedPack ===
							pack.id
								? 'border-primary ring-primary/20 ring-2'
								: ''}"
						>
							{#if pack.popular}
								<div
									class="bg-primary text-primary-foreground absolute top-0 right-0 rounded-bl-lg px-2 py-1 text-[10px] font-bold"
								>
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
									<span class="text-muted-foreground text-xs">USD</span>
								</div>
								{#if pack.bonus > 0}
									<div
										class="mt-2 inline-flex items-center rounded-full bg-green-50 px-2 py-0.5 text-xs font-bold text-green-600 dark:bg-green-900/20 dark:text-green-400"
									>
										+{pack.bonus}% BONUS
									</div>
								{/if}
							</Card.Content>
						</Card.Root>
					</button>
				{/each}
			</div>

			<div class="pt-8">
				<div class="mb-6 flex items-center gap-2">
					<div
						class="flex h-6 w-6 items-center justify-center rounded-full border text-xs font-bold"
					>
						2
					</div>
					<h2 class="text-2xl font-bold">Choose Payment Method</h2>
				</div>

				<div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
					{#each paymentMethods as method}
						<button
							type="button"
							onclick={() => (paymentMethod = method.id)}
							class="hover:bg-muted/50 flex cursor-pointer items-center justify-between rounded-xl border-2 p-4 transition-all {paymentMethod ===
							method.id
								? 'border-primary bg-primary/5'
								: ''}"
						>
							<div class="flex items-center gap-3">
								<div class="bg-background rounded-lg border p-2">
									<method.icon class="h-5 w-5" />
								</div>
								<span class="text-sm font-bold">{method.label}</span>
							</div>
							{#if paymentMethod === method.id}
								<CheckCircle2 class="text-primary h-4 w-4" />
							{/if}
						</button>
					{/each}
				</div>
			</div>
		</div>

		<!-- Step 3: Summary & Checkout -->
		<div class="space-y-6">
			<div class="mb-4 flex items-center gap-2">
				<div class="flex h-6 w-6 items-center justify-center rounded-full border text-xs font-bold">
					3
				</div>
				<h2 class="text-2xl font-bold">Order Summary</h2>
			</div>

			<Card.Root>
				<Card.Content class="space-y-4 pt-6">
					{@const currentPack = currencyPacks.find((p) => p.id === selectedPack)}
					<div class="flex items-center justify-between text-sm">
						<span class="text-muted-foreground">Pack</span>
						<span class="font-medium">{currentPack?.label}</span>
					</div>
					<div class="flex items-center justify-between text-sm">
						<span class="text-muted-foreground">Amount</span>
						<span class="font-medium">{currentPack?.amount.toLocaleString()} SPC</span>
					</div>
					<div class="flex items-center justify-between text-sm">
						<span class="text-muted-foreground">Payment Method</span>
						<span class="font-medium uppercase">{paymentMethod}</span>
					</div>

					<Separator />

					<div class="flex items-center justify-between pt-2">
						<span class="text-lg font-bold">Total</span>
						<span class="text-primary text-2xl font-extrabold">${currentPack?.price}</span>
					</div>

					<div class="bg-muted/50 mt-4 flex items-start gap-3 rounded-lg p-4">
						<ShieldCheck class="text-primary h-5 w-5 shrink-0" />
						<p class="text-muted-foreground text-[10px] leading-relaxed">
							Your transaction is encrypted and secure. We do not store your payment information on
							our servers.
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

						<Button type="submit" class="group h-12 w-full text-lg font-bold" disabled={loading}>
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
					<CheckCircle2 class="text-primary h-4 w-4" />
					<Alert.Title>Payment Confirmed!</Alert.Title>
					<Alert.Description>
						Order #{form.orderId.substring(0, 8)} has been completed.
					</Alert.Description>
				</Alert.Root>
			{/if}
		</div>
	</div>
</div>
