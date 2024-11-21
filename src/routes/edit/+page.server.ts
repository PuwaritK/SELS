import { getSel, updateSel } from '$lib/server/database/sel';
import { getSelSex } from '$lib/server/database/sex';
import { getSelTier } from '$lib/server/database/tier';
import { getSelType } from '$lib/server/database/type';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = async (event) => {
	if (event.locals.account?.role_id !== 3) {
		return redirect(303, '/');
	}
	let sel_id = parseInt(event.url.searchParams.get('sel_id')!);

	const selTypes = await getSelType();
	const selSex = await getSelSex();
	const selTier = await getSelTier();
	const selToConfigure = await getSel(sel_id);
	return { selTypes, selSex, selTier, selToConfigure };
};

export const actions: Actions = {
	default: async ({ request }) => {
		const selData = await request.formData();
		const selName = selData.get('sel_name') as string;
		const selType = parseInt(selData.get('sel_type') as string);
		const selColour = selData.get('sel_colour') as string;
		const selSex = parseInt(selData.get('sel_sex') as string);
		const selDOB = new Date(selData.get('sel_dob') as string);
		const selWeight = parseInt(selData.get('sel_weight') as string);
		const selShowXP = parseInt(selData.get('sel_showxp') as string);
		const selPrice = parseInt(selData.get('sel_price') as string);
		const selTier = parseInt(selData.get('sel_tier') as string);
		const selID = parseInt(selData.get('sel_id') as string);
		const username = selData.get('username') as string;

		await updateSel(
			selID,
			selName,
			selType,
			selColour,
			selSex,
			selDOB,
			selWeight,
			selShowXP,
			selPrice,
			selTier
		);
		redirect(302, '/dev?search=' + username);
	}
};
