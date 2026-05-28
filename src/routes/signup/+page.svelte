<script lang="ts">
	let { form } = $props();
	import SignupForm from '$lib/components/signup-form.svelte';
	import * as Alert from '$lib/components/ui/alert/index.js';
	import AlertCircleIcon from '@lucide/svelte/icons/alert-circle';
	import { FieldGroup, FieldDescription } from '$lib/components/ui/field/index.js';
</script>

<title>Sign Up</title>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<meta name="robots" content="index,follow" />
<meta name="generator" content="GrapesJS Studio" />

<div class="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
	<div class="w-full max-w-sm md:max-w-4xl">
		<SignupForm />
	</div>
	{#if form?.error}
		<Alert.Root variant="destructive">
			<AlertCircleIcon />
			<Alert.Title>{form.error}</Alert.Title>
			<Alert.Description>
				<p>Please verify your information and try again.</p>
			</Alert.Description>
		</Alert.Root>
	{/if}
</div>
