<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Field from '$lib/components/ui/field/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import type { HTMLAttributes } from 'svelte/elements';
	import { enhance } from '$app/forms';
	import { mode } from 'mode-watcher';
	import sel_logo from '$lib/sel_logo.png';
	import dark_sel_logo from '$lib/dark_sel_logo.png';

	let { class: className, ...restProps }: HTMLAttributes<HTMLDivElement> = $props();

	let currentLogo = $derived(mode.current === 'dark' ? dark_sel_logo : sel_logo);
</script>

<div class={cn('flex flex-col gap-6', className)} {...restProps}>
	<Card.Root class="overflow-hidden p-0">
		<Card.Content class="grid p-0 md:grid-cols-2">
			<form class="p-6 md:p-8" method="post" use:enhance>
				<Field.Group>
					<div class="flex flex-col items-center gap-2 text-center">
						<h1 class="text-2xl font-bold">Let's make an account!</h1>
					</div>
					<Field.Field>
						<Field.Label for="username">Username</Field.Label>
						<Input
							id="username"
							type="text"
							name="username"
							maxlength={20}
							placeholder="Your username"
							required
						/>
					</Field.Field>
					<Field.Field>
						<Field.Field class="grid grid-cols-2 gap-4">
							<Field.Field>
								<Field.Label for="password">Password</Field.Label>
								<Input id="password" type="password" name="password" required />
							</Field.Field>
							<Field.Field>
								<Field.Label for="confirm-password">Confirm Password</Field.Label>
								<Input id="confirm-password" type="password" name="confirm_password" required />
							</Field.Field>
						</Field.Field>
					</Field.Field>
					<Field.Field>
						<Button type="submit">Create Account</Button>
					</Field.Field>
					<Field.Description class="text-center">
						Already have an account? <a href="/signin">Sign in</a>
					</Field.Description>
				</Field.Group>
			</form>
			<div class="bg-muted relative hidden md:block">
				<img src={currentLogo} alt="" class="absolute inset-0 h-full w-full object-fill" />
			</div>
		</Card.Content>
	</Card.Root>
	<Field.Description class="px-6 text-center">
		By clicking continue, you agree to <a
			href="https://www.gamcare.org.uk/get-support/talk-to-us-now/">gamble responsibly</a
		>
		and
		<a href="https://www.ukat.co.uk/addiction/behavioural/gaming/">only play in moderation</a>.
	</Field.Description>
</div>
