<script lang="ts">
	import { page } from '$app/stores';
	import { Button } from '$lib/components/ui/button';
	import { Separator } from '$lib/components/ui/separator';
	import {
		User,
		Sparkles,
		Repeat,
		PlusCircle,
		ShieldCheck,
		Terminal,
		LogOut,
		Coins
	} from '@lucide/svelte';
	import sel_banner from '$lib/sel_banner.png';
	import sel_coin from '$lib/sel_coin.gif';

	let { children, data } = $props();

	const navItems = [
		{
			href: '/sels/profile',
			label: 'Profile',
			icon: User,
			active: (path: string) => path.startsWith('/sels/profile')
		},
		{
			href: '/sels/gacha',
			label: 'Gacha',
			icon: Sparkles,
			active: (path: string) => path === '/sels/gacha'
		},
		{
			href: '/sels/trade',
			label: 'Trade',
			icon: Repeat,
			active: (path: string) => path === '/sels/trade'
		},
		{
			href: '/sels/addcurrency',
			label: 'Add Currency',
			icon: PlusCircle,
			active: (path: string) => path === '/sels/addcurrency',
			special: true
		}
	];
</script>

<div class="bg-background flex min-h-screen flex-col">
	<!-- Banner -->
	<div class="bg-muted relative h-32 w-full overflow-hidden md:h-96">
		<img src={sel_banner} class="h-full w-full object-cover opacity-90" alt="SELS Banner" />
		<div class="to-background/20 absolute inset-0 bg-linear-to-b from-transparent"></div>
	</div>

	<!-- Navigation -->
	<header
		class="bg-background/95 supports-backdrop-filter:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur-sm"
	>
		<div class="container mx-auto flex h-16 items-center justify-between gap-4 px-4">
			<nav class="hidden items-center gap-1 md:flex">
				{#each navItems as item}
					<Button
						href={item.href}
						variant={item.active($page.url.pathname) ? 'secondary' : 'ghost'}
						size="sm"
						class="gap-2 {item.special ? 'text-primary hover:text-primary font-bold' : ''}"
					>
						<item.icon class="h-4 w-4" />
						{item.label}
					</Button>
				{/each}

				{#if data.isAdmin}
					<Button
						href="/admin"
						variant="ghost"
						size="sm"
						class="gap-2 text-green-600 hover:text-green-700"
					>
						<ShieldCheck class="h-4 w-4" />
						Admin
					</Button>
				{/if}

				{#if data.isDev}
					<Button
						href="/dev"
						variant="ghost"
						size="sm"
						class="gap-2 text-blue-600 hover:text-blue-700"
					>
						<Terminal class="h-4 w-4" />
						Dev
					</Button>
				{/if}
			</nav>

			<!-- Mobile Nav Placeholder (Simple for now) -->
			<div class="flex items-center gap-2 md:hidden">
				<Button href="/sels/profile" variant="ghost" size="icon">
					<User class="h-5 w-5" />
				</Button>
				<Button href="/sels/gacha" variant="ghost" size="icon">
					<Sparkles class="h-5 w-5" />
				</Button>
			</div>

			<div class="flex items-center gap-4">
				<div
					class="bg-primary/10 border-primary/20 hover:bg-primary/15 flex items-center gap-2 rounded-full border px-3 py-1.5 transition-all"
				>
					<span class="text-primary text-sm font-bold tabular-nums">
						{data.accountCurrency?.toLocaleString()}
					</span>
					<img src={sel_coin} class="h-5 w-5 animate-pulse" alt="SPC" />
				</div>

				<Separator orientation="vertical" class="mx-1 hidden h-6 sm:block" />

				<Button
					href="/signout"
					variant="ghost"
					size="sm"
					class="text-destructive hover:bg-destructive/10 hover:text-destructive hidden gap-2 sm:flex"
					data-sveltekit-preload-data="tap"
				>
					<LogOut class="h-4 w-4" />
					Signout
				</Button>

				<Button
					href="/signout"
					variant="ghost"
					size="icon"
					class="text-destructive sm:hidden"
					data-sveltekit-preload-data="tap"
				>
					<LogOut class="h-5 w-5" />
				</Button>
			</div>
		</div>
	</header>

	<!-- Content -->
	<main class="grow">
		{@render children()}
	</main>

	<!-- Footer -->
	<footer class="border-t py-6 md:py-0">
		<div
			class="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:h-24 md:flex-row"
		>
			<p class="text-muted-foreground text-sm">
				&copy; 2026 SELS Fantasy Management. All rights reserved. (Not a real company.)
			</p>
		</div>
	</footer>
</div>
