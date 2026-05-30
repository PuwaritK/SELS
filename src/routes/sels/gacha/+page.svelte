<script lang="ts">
	import { enhance } from '$app/forms';
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import * as Alert from '$lib/components/ui/alert';
	import { Sparkles, AlertCircle, CheckCircle2 } from '@lucide/svelte';
	import { toast } from 'svelte-sonner';

	let { data, form } = $props();
	let loading = $state(false);

	const pullOptions = [
		{ count: 1, label: 'Single Pull', cost: 3000, discount: false },
		{ count: 5, label: 'Small Pack', cost: 13500, discount: true },
		{ count: 10, label: 'Large Pack', cost: 27000, discount: true },
		{ count: 50, label: 'Mega Pack', cost: 135000, discount: true }
	];

	$effect(() => {
		if (form?.result) {
			if (typeof form.result === 'string') {
				toast.error(form.result);
			} else {
				toast.success(`Successfully pulled ${form.result} Sels!`);
			}
		}
	});
</script>

<div class="container mx-auto max-w-4xl space-y-10 px-4 py-10">
	<div class="space-y-4 text-center">
		<h1
			class="text-primary flex items-center justify-center gap-4 text-5xl font-extrabold tracking-tight lg:text-6xl"
		>
			<Sparkles class="h-12 w-12" />
			Gacha Center
			<Sparkles class="h-12 w-12" />
		</h1>
		<p class="text-muted-foreground text-xl">Try your luck and expand your Sel collection!</p>
	</div>

	<div class="grid gap-8">
		<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
			{#each pullOptions as option}
				<Card.Root class="overflow-hidden transition-all hover:-translate-y-1 hover:shadow-md">
					<Card.Header>
						<div class="flex items-center justify-between">
							<Card.Title>{option.label}</Card.Title>
							{#if option.discount}
								<span
									class="bg-primary/10 text-primary rounded-full px-2 py-1 text-xs font-bold tracking-tighter uppercase"
									>10% OFF</span
								>
							{/if}
						</div>
						<Card.Description>{option.count}x Random Sels</Card.Description>
					</Card.Header>
					<Card.Content>
						<div class="flex items-baseline gap-1">
							<span class="text-2xl font-bold">{option.cost.toLocaleString()}</span>
							<span class="text-muted-foreground text-sm font-medium">SPC</span>
						</div>
					</Card.Content>
					<Card.Footer>
						<form
							method="POST"
							use:enhance={() => {
								loading = true;
								return async ({ update }) => {
									await update();
									loading = false;
								};
							}}
							class="w-full"
						>
							<input type="hidden" name="pullCount" value={option.count} />
							<Button
								type="submit"
								class="w-full"
								disabled={loading || (data.account?.currency || 0) < option.cost}
							>
								Pull {option.count}x
							</Button>
						</form>
					</Card.Footer>
				</Card.Root>
			{/each}
		</div>
	</div>

	{#if form?.result}
		<div class="mx-auto max-w-md">
			{#if typeof form.result === 'string'}
				<Alert.Root variant="destructive">
					<AlertCircle class="h-4 w-4" />
					<Alert.Title>Pull Failed</Alert.Title>
					<Alert.Description>{form.result}</Alert.Description>
				</Alert.Root>
			{:else}
				<Alert.Root class="bg-primary/10 border-primary/20">
					<CheckCircle2 class="text-primary h-4 w-4" />
					<Alert.Title>Success!</Alert.Title>
					<Alert.Description>
						You've added {form.result} new Sels to your paradise.
						<Button variant="link" href="/sels/profile" class="ml-1 h-auto p-0 font-bold"
							>View Profile</Button
						>
					</Alert.Description>
				</Alert.Root>
			{/if}
		</div>
	{/if}
</div>
