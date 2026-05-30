<script lang="ts">
	let { form } = $props();
	import SignupForm from '$lib/components/signup-form.svelte';
	import * as Alert from '$lib/components/ui/alert/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import AlertCircleIcon from '@lucide/svelte/icons/alert-circle';
	import CheckCircleIcon from '@lucide/svelte/icons/check-circle';
</script>

<title>Sign Up</title>

<div class="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
	<div class="w-full max-w-sm md:max-w-4xl">
		{#if form?.created}
			<div class="space-y-6">
				<Alert.Root class="border-primary/20 bg-primary/10">
					<CheckCircleIcon class="text-primary h-4 w-4" />
					<Alert.Title>Account Created!</Alert.Title>
					<Alert.Description>
						Your account has been successfully created. You can now sign in to your new paradise.
					</Alert.Description>
				</Alert.Root>
				<div class="flex justify-center">
					<Button href="/signin" size="lg" class="w-full max-w-xs">Sign In Now</Button>
				</div>
			</div>
		{:else}
			<SignupForm />
		{/if}
	</div>
	{#if form?.error}
		<Alert.Root variant="destructive" class="mt-4 w-full max-w-sm md:max-w-4xl">
			<AlertCircleIcon class="h-4 w-4" />
			<Alert.Title>{form.error}</Alert.Title>
			<Alert.Description>
				<p>Please verify your information and try again.</p>
			</Alert.Description>
		</Alert.Root>
	{/if}
</div>
