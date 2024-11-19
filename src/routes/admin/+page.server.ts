import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	if (event.locals.account?.role_id === 1) {
		console.log('not enough privilege');
		return redirect(303, '/');
	}
};

//admin can search every account and add or remove sels
