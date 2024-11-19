import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from '../$types';

export const load: PageServerLoad = async (event) => {
	if (event.locals.account?.role_id !== 3) {
		return redirect(303, '/');
	}
};

//dev can do everything to any accounts