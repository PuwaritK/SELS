import { pullSel } from '$lib/server/database/gacha';
import type { Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { account } from '@prisma/client';

export const load: PageServerLoad = async () => {};

export const actions: Actions = {
	one: async (event) => {
		await pullSel(event.locals.account as account, 1);
	},
	ten: async (event) => {
		await pullSel(event.locals.account as account, 10);
	}
};
