import { pullSel } from '$lib/server/database/gacha';
import type { Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { account, sel } from '@prisma/client';

export const load: PageServerLoad = async () => {};

export const actions: Actions = {
	default: async (event) => {
		let result;
		result = await pullSel(
			event.locals.account as account,
			parseInt((await event.request.formData()).get('pullCount') as string)
		);
		return { result };
	}
};
