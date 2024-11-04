// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
import type { account, Session } from '@prisma/client';

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user: account | null;
			session: Session | null;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
