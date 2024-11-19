import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from '../$types';

export const load: PageServerLoad = async (event) => {
	if (event.locals.account?.role_id! < 3) {
		throw redirect(308, '/');
	}
};

//dev can do everything to any accounts
