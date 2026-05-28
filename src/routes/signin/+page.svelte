<script lang="ts">
	let { form } = $props();
	import LoginForm from '$lib/components/login-form.svelte';
	import { FieldGroup, FieldDescription } from '$lib/components/ui/field/index.js';
	import * as Alert from '$lib/components/ui/alert/index.js';
	import AlertCircleIcon from '@lucide/svelte/icons/alert-circle';
</script>

<div class="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
	<div class="w-full max-w-sm gap-7">
		<FieldGroup>
			<LoginForm />
			{#if form?.error}
				<Alert.Root variant="destructive">
					<AlertCircleIcon />
					<Alert.Title>Wrong username or password.</Alert.Title>
					<Alert.Description>
						<p>Please verify your information and try again.</p>
					</Alert.Description>
				</Alert.Root>
			{/if}
			<FieldDescription class="px-6 text-center">
				By clicking continue, you agree to <a
					href="https://www.gamcare.org.uk/get-support/talk-to-us-now/">gamble responsibly</a
				>
				and
				<a href="https://www.ukat.co.uk/addiction/behavioural/gaming/">only play in moderation</a>.
			</FieldDescription>
		</FieldGroup>
	</div>
</div>
