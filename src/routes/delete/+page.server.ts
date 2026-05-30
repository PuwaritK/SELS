import { deleteAllSel, deleteSel } from '$lib/server/database/sel';
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
	default: async ({ request }) => {
		const formData = await request.formData();
		const deletedata = formData.get('delete') as string;
		const deleteall = formData.get('deleteall') as string;
		if (deleteall !== null) {
			await deleteAllSel(deleteall);
			return;
		}
		const selID = Number(deletedata);
		try {
			await deleteSel(selID);
		} catch {
			// nothing
		}
	}
};
