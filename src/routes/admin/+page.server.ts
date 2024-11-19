import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from '../$types';

export const load: PageServerLoad = async (event) => {
	if (event.locals.account?.role_id! < 2) {
		throw redirect(308, '/');
	}
};

//admin can search every account and add or remove sels
