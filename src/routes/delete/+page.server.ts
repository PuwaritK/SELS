import { deleteSel } from '$lib/server/database/sel';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = async () => {
	return {};
};

export const actions: Actions = {
	default: async ({ request }) => {
		let formData = await request.formData();
		let selID = Number(formData.get('delete') as string);
		await deleteSel(selID);
		redirect(302, './');
	}
};
