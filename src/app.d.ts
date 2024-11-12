// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
import type { account, session } from '@prisma/client';

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			account: account | null;
			session: session | null;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
