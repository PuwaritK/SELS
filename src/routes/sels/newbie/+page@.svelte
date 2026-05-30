<script lang="ts">
	import { enhance } from '$app/forms';
	import { mode } from 'mode-watcher';
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import * as Alert from '$lib/components/ui/alert';
	import * as Field from '$lib/components/ui/field';
	import { Separator } from '$lib/components/ui/separator';
	import {
		ShieldCheck,
		Sparkles,
		CheckCircle2,
		AlertCircle,
		ArrowRight,
		Palette,
		UserCircle,
		VenetianMask
	} from '@lucide/svelte';
	import { toast } from 'svelte-sonner';

	import dark_sel_banner from '$lib/dark_sel_banner.png';

	let { form, data } = $props();
	let paradiseName = $state('');
	let verifyForm: HTMLFormElement;
	let verifyTimer: number | null = null;

	const resetTimer = () => {
		if (verifyTimer) {
			clearTimeout(verifyTimer);
		}

		verifyTimer = window.setTimeout(() => {
			if (verifyForm) {
				verifyForm.requestSubmit();
			}
		}, 1000); // Reduced delay for snappier feel
	};

	let isParadiseValid = $derived(form?.verified && !form.isPNameExist && paradiseName.length > 0);
</script>

<div class="bg-background min-h-screen pb-20">
	<!-- Banner -->
	<div class="bg-muted relative h-48 w-full overflow-hidden md:h-80">
		<img src={dark_sel_banner} alt="SELS Banner" class="h-full w-full object-cover opacity-90" />
		<div class="to-background absolute inset-0 bg-linear-to-b from-transparent"></div>
	</div>

	<div class="relative z-10 container mx-auto -mt-20 max-w-4xl px-4">
		<div class="mb-10 space-y-4 text-center">
			<h1 class="text-foreground text-4xl font-extrabold tracking-tight drop-shadow-sm lg:text-5xl">
				Welcome to SELS
			</h1>
			<p class="text-muted-foreground mx-auto max-w-xl text-lg font-medium">
				You're just two steps away from starting your fantasy management journey. Let's set up your
				paradise!
			</p>
		</div>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
			<!-- Step 1: Paradise Setup -->
			<Card.Root class="border-2 {isParadiseValid ? 'border-primary/50' : ''} transition-all">
				<Card.Header>
					<div class="mb-2 flex items-center gap-2">
						<div class="bg-primary/10 rounded-lg p-2">
							<ShieldCheck class="text-primary h-5 w-5" />
						</div>
						<span class="text-primary text-xs font-bold tracking-widest uppercase">Step 1</span>
					</div>
					<Card.Title class="text-2xl">Paradise Setup</Card.Title>
					<Card.Description>Choose a unique name for your new home.</Card.Description>
				</Card.Header>
				<Card.Content class="space-y-6">
					<form
						action="?/paradise"
						method="post"
						use:enhance={() => {
							const t = toast.loading('Verifying paradise name...');
							return async ({ update }) => {
								await update({ reset: false });
								toast.dismiss(t);
							};
						}}
						bind:this={verifyForm}
						class="space-y-4"
					>
						<Field.Field>
							<Field.Label for="paradise">Paradise Name</Field.Label>
							<Input
								id="paradise"
								type="text"
								name="paradise"
								bind:value={paradiseName}
								placeholder="Enter a legendary name..."
								required
								oninput={resetTimer}
							/>
							<Field.Description>This is how other players will find you.</Field.Description>
						</Field.Field>
					</form>

					{#if form?.verified && paradiseName.length > 0}
						{#if form.isPNameExist}
							<Alert.Root variant="destructive" class="bg-destructive/5">
								<AlertCircle class="h-4 w-4" />
								<Alert.Title>Unavailable</Alert.Title>
								<Alert.Description>
									This name is already taken. Try something more unique!
								</Alert.Description>
							</Alert.Root>
						{:else}
							<Alert.Root class="border-primary/20 bg-primary/5">
								<CheckCircle2 class="text-primary h-4 w-4" />
								<Alert.Title class="text-primary">Available!</Alert.Title>
								<Alert.Description>
									"{paradiseName}" is a perfect name for your new paradise.
								</Alert.Description>
							</Alert.Root>
						{/if}
					{/if}
				</Card.Content>
			</Card.Root>

			<!-- Step 2: First Sel Setup -->
			<Card.Root
				class="border-2 {isParadiseValid
					? 'border-primary/20'
					: 'pointer-events-none opacity-50 grayscale'} transition-all"
			>
				<Card.Header>
					<div class="mb-2 flex items-center gap-2">
						<div class="bg-primary/10 rounded-lg p-2">
							<Sparkles class="text-primary h-5 w-5" />
						</div>
						<span class="text-primary text-xs font-bold tracking-widest uppercase">Step 2</span>
					</div>
					<Card.Title class="text-2xl">Your First Sel</Card.Title>
					<Card.Description>Configure your very first companion.</Card.Description>
				</Card.Header>
				<Card.Content>
					<form action="?/sel" method="post" class="space-y-6">
						<input type="hidden" name="paradise_name" value={paradiseName} />

						<Field.Field>
							<Field.Label for="sel_name" class="flex items-center gap-2">
								<UserCircle class="h-4 w-4" /> Sel Name
							</Field.Label>
							<Input
								id="sel_name"
								type="text"
								name="sel_name"
								placeholder="Name your Sel..."
								required
							/>
						</Field.Field>

						<div class="grid grid-cols-2 gap-4">
							<Field.Field>
								<Field.Label for="seltype" class="flex items-center gap-2">
									<VenetianMask class="h-4 w-4" /> Race
								</Field.Label>
								<select
									name="sel_type"
									id="seltype"
									class="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
								>
									{#each data.selTypes as type}
										<option value={type.type_id}>{type.type_name}</option>
									{/each}
								</select>
							</Field.Field>

							<Field.Field>
								<Field.Label for="selsex" class="flex items-center gap-2">Sex</Field.Label>
								<select
									name="sel_sex"
									id="selsex"
									class="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
								>
									<option value="1">Male</option>
									<option value="2">Female</option>
								</select>
							</Field.Field>
						</div>

						<Field.Field>
							<Field.Label for="selcolour" class="flex items-center gap-2">
								<Palette class="h-4 w-4" /> Primary Colour
							</Field.Label>
							<div class="flex items-center gap-4">
								<Input
									type="color"
									name="sel_colour"
									id="selcolour"
									class="h-10 w-16 cursor-pointer p-1"
								/>
								<span class="text-muted-foreground text-sm">Pick a vibrant color for your Sel.</span
								>
							</div>
						</Field.Field>

						<Separator />

						<Button type="submit" class="group h-12 w-full text-lg font-bold">
							Start Your Adventure
							<ArrowRight class="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
						</Button>
					</form>
				</Card.Content>
			</Card.Root>
		</div>

		{#if !form?.verified || form.isPNameExist || paradiseName.length === 0}
			<div class="mt-8 animate-bounce text-center">
				<p
					class="text-muted-foreground flex items-center justify-center gap-2 text-sm font-semibold"
				>
					<ArrowRight class="h-4 w-4" /> Please verify your paradise name to unlock Step 2
				</p>
			</div>
		{/if}
	</div>
</div>
