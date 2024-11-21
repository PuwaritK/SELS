import { deleteSel } from '$lib/server/database/sel';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = async (event) => {
	if (event.locals.account === null) {
		redirect(302, '/');
	}
	if (event.locals.account?.role_id === 1) {
		return redirect(303, '/');
	}
};

export const actions: Actions = {
	default: async ({ request, url }) => {
		let formData = await request.formData();
		let selID = Number(formData.get('delete') as string);
		// if (!(await isSelExist(selID))) return;
		try {
			await deleteSel(selID);
		} catch {
			// nothing
		}
	}
};
