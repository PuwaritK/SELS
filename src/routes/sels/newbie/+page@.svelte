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
	
	import sel_banner from '$lib/sel_banner.png';
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

	let currentBanner = $derived(mode.current === 'dark' ? dark_sel_banner : sel_banner);
	
	let isParadiseValid = $derived(form?.verified && !form.isPNameExist && paradiseName.length > 0);
</script>

<div class="bg-background min-h-screen pb-20">
	<!-- Banner -->
	<div class="bg-muted relative h-48 w-full overflow-hidden md:h-80">
		<img src={currentBanner} alt="SELS Banner" class="h-full w-full object-cover opacity-90" />
		<div class="to-background absolute inset-0 bg-linear-to-b from-transparent"></div>
	</div>

	<div class="container mx-auto -mt-20 max-w-4xl px-4 relative z-10">
		<div class="text-center space-y-4 mb-10">
			<h1 class="text-4xl font-extrabold tracking-tight lg:text-5xl text-foreground drop-shadow-sm">
				Welcome to SELS
			</h1>
			<p class="text-lg text-muted-foreground font-medium max-w-xl mx-auto">
				You're just two steps away from starting your fantasy management journey. Let's set up your paradise!
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			<!-- Step 1: Paradise Setup -->
			<Card.Root class="border-2 {isParadiseValid ? 'border-primary/50' : ''} transition-all">
				<Card.Header>
					<div class="flex items-center gap-2 mb-2">
						<div class="bg-primary/10 p-2 rounded-lg">
							<ShieldCheck class="h-5 w-5 text-primary" />
						</div>
						<span class="text-xs font-bold uppercase tracking-widest text-primary">Step 1</span>
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
								<CheckCircle2 class="h-4 w-4 text-primary" />
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
			<Card.Root class="border-2 {isParadiseValid ? 'border-primary/20' : 'opacity-50 pointer-events-none grayscale'} transition-all">
				<Card.Header>
					<div class="flex items-center gap-2 mb-2">
						<div class="bg-primary/10 p-2 rounded-lg">
							<Sparkles class="h-5 w-5 text-primary" />
						</div>
						<span class="text-xs font-bold uppercase tracking-widest text-primary">Step 2</span>
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
							<Input id="sel_name" type="text" name="sel_name" placeholder="Name your Sel..." required />
						</Field.Field>

						<div class="grid grid-cols-2 gap-4">
							<Field.Field>
								<Field.Label for="seltype" class="flex items-center gap-2">
									<VenetianMask class="h-4 w-4" /> Race
								</Field.Label>
								<select 
									name="sel_type" 
									id="seltype" 
									class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
								>
									{#each data.selTypes as type}
										<option value={type.type_id}>{type.type_name}</option>
									{/each}
								</select>
							</Field.Field>

							<Field.Field>
								<Field.Label for="selsex" class="flex items-center gap-2">
									Sex
								</Field.Label>
								<select 
									name="sel_sex" 
									id="selsex"
									class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
							<div class="flex gap-4 items-center">
								<Input type="color" name="sel_colour" id="selcolour" class="w-16 h-10 p-1 cursor-pointer" />
								<span class="text-sm text-muted-foreground">Pick a vibrant color for your Sel.</span>
							</div>
						</Field.Field>

						<Separator />

						<Button type="submit" class="w-full h-12 text-lg font-bold group">
							Start Your Adventure
							<ArrowRight class="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
						</Button>
					</form>
				</Card.Content>
			</Card.Root>
		</div>

		{#if !form?.verified || form.isPNameExist || paradiseName.length === 0}
			<div class="mt-8 text-center animate-bounce">
				<p class="text-sm font-semibold text-muted-foreground flex items-center justify-center gap-2">
					<ArrowRight class="h-4 w-4" /> Please verify your paradise name to unlock Step 2
				</p>
			</div>
		{/if}
	</div>
</div>

<style>
	/* Custom styling for the color input to make it look a bit cleaner */
	input[type="color"]::-webkit-color-swatch-wrapper {
		padding: 0;
	}
	input[type="color"]::-webkit-color-swatch {
		border: none;
		border-radius: 4px;
	}
</style>
