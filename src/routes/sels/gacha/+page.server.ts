import { pullSel } from '$lib/server/database/gacha';
import type { Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { account, sel } from '@prisma/client';

export const load: PageServerLoad = async () => {};

export const actions: Actions = {
	one: async (event) => {
		let result;
		result = await pullSel(event.locals.account as account, 1);
		return { result };
	},
	ten: async (event) => {
		let result;
		result = await pullSel(event.locals.account as account, 10);
		return { result };
	}
};
