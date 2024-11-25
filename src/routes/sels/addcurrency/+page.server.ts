import type { Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

import { addCurrency } from '$lib/server/database/account';

export const load: PageServerLoad = async () => {};

export const actions: Actions = {
	default: async (event) => {
		let amount = await addCurrency(
			event.locals.account?.user_id!,
			parseInt((await event.request.formData()).get('currency') as string)
		);
		return { amount };
	}
};
