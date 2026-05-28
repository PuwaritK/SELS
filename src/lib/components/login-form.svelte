<script lang="ts">
	import GalleryVerticalEndIcon from '@lucide/svelte/icons/gallery-vertical-end';
	import type { HTMLAttributes } from 'svelte/elements';
	import {
		FieldGroup,
		Field,
		FieldLabel,
		FieldDescription,
		FieldSeparator
	} from '$lib/components/ui/field/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { cn, type WithElementRef } from '$lib/utils.js';

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();

	const id = $props.id();
</script>

<div class={cn('flex flex-col gap-6', className)} bind:this={ref} {...restProps}>
	<form method="post">
		<FieldGroup>
			<div class="flex flex-col items-center gap-2 text-center">
				<a href="." class="flex flex-col items-center gap-2 font-medium">
					<div class="flex size-16 items-center justify-center rounded-md">
						<img src="/sprites/sel_coin.gif" alt="SELS" class="size-16" />
					</div>
					<span class="sr-only">SELS</span>
				</a>
				<h1 class="text-4xl font-bold">Welcome to SELS</h1>
				<FieldDescription>
					Don't have an account? <a href="/signup">Sign up</a>
				</FieldDescription>
			</div>
			<Field>
				<FieldLabel for="user-{id}">Username</FieldLabel>
				<Input id="user-{id}" type="text" name="username" placeholder="Your username" required />
			</Field>
			<Field>
				<div class="flex items-center">
					<FieldLabel for="password-{id}">Password</FieldLabel>
					<!-- <a href="##" class="ms-auto inline-block text-sm underline"> Forgot your password? </a> -->
				</div>
				<Input id="password-{id}" type="password" name="password" required />
			</Field>
			<Field>
				<Button type="submit">Login</Button>
			</Field>
		</FieldGroup>
	</form>
</div>
