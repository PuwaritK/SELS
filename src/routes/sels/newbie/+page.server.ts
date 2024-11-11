import { verifyParadiseName } from '$lib/server/database/paradise';
import { getSelType } from '$lib/server/database/type';
import { redirect, type Actions } from '@sveltejs/kit';
import prisma from '$lib/server/database/client';
import { getAccount } from '$lib/server/database/account';
const NEWBIE_WEIGHT_KILOS = 8;

export const load = async () => {
	const selTypes = await getSelType();
	return { selTypes };
};
export const actions: Actions = {
	paradise: async ({ request }) => {
		const paradiseData = await request.formData();
		const paradiseName = paradiseData.get('paradise') as string;

		const isPNameExist = await verifyParadiseName(paradiseName);
		return { verified: true, isPNameExist };
	},
	sel: async ({ request, locals }) => {
		const selData = await request.formData();
		const selName = selData.get('sel_name') as string;
		const selType = parseInt(selData.get('sel_type') as string);
		const selColour = selData.get('sel_colour') as string;
		const selSex = parseInt(selData.get('sel_sex') as string);
		const paradiseName = selData.get('paradise_name') as string;

		const paradise = await prisma.paradise.create({
			data: {
				name: paradiseName
			}
		});
		const sel = await prisma.sel.create({
			data: {
				name: selName,
				type_id: selType,
				colour: selColour,
				sex_id: selSex,
				dob: new Date(Date.now()),
				weight: NEWBIE_WEIGHT_KILOS,
				price: 0,
				tier_id: 1,
				paradise_id: paradise.paradise_id
			}
		});
		await prisma.account.update({
			where: {
				user_id: locals.user?.user_id
			},
			data: {
				paradise_id: paradise.paradise_id
			}
		});
		redirect(302, '/sels/profile');
	}
};
