import {
	getSelsByParadise,
	getSelsForSale,
	updateSelPrice,
	getUnlistedSelCount
} from '$lib/server/database/sel';
import { executeTrade } from '$lib/server/database/trade';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	if (!locals.account) {
		throw redirect(302, '/signin');
	}
	if (!locals.account.paradise_id) {
		throw redirect(302, '/sels/newbie');
	}
	const paradiseId = locals.account.paradise_id;
	const marketplaceSels = await getSelsForSale(paradiseId, 30);
	const userSels = await getSelsByParadise(paradiseId);

	return {
		marketplaceSels,
		userSels,
		currency: locals.account.currency
	};
};

export const actions: Actions = {
	buy: async ({ request, locals }) => {
		if (!locals.account) return fail(401);

		const data = await request.formData();
		const selId = Number(data.get('selId'));

		try {
			const result = await executeTrade(locals.account.user_id, selId);
			return {
				success: true,
				message: `Successfully bought Sel for ${result.price} SPC!`
			};
		} catch (error: any) {
			return fail(400, { success: false, message: error.message });
		}
	},

	list: async ({ request, locals }) => {
		if (!locals.account) return fail(401);

		const data = await request.formData();
		const selId = Number(data.get('selId'));
		const price = Number(data.get('price'));

		if (price <= 0) {
			return fail(400, {
				success: false,
				message: 'Price must be greater than 0'
			});
		}

		// Prevent listing if user only has one Sel left
		const unlistedCount = await getUnlistedSelCount(locals.account.paradise_id!);
		if (unlistedCount <= 1) {
			return fail(400, {
				success: false,
				message: "You can't list your only Sel on sale!"
			});
		}

		try {
			await updateSelPrice(selId, price);
			return { success: true, message: 'Sel listed for sale!' };
		} catch (error: any) {
			return fail(400, { success: false, message: 'Failed to list Sel' });
		}
	},

	unlist: async ({ request, locals }) => {
		if (!locals.account) return fail(401);

		const data = await request.formData();
		const selId = Number(data.get('selId'));

		try {
			await updateSelPrice(selId, 0);
			return { success: true, message: 'Sel unlisted' };
		} catch (error: any) {
			return fail(400, { success: false, message: 'Failed to unlist Sel' });
		}
	}
};
