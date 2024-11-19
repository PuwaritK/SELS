import { redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';
import prisma from '$lib/server/database/client';

export const load: PageServerLoad = async (event) => {
	if (event.locals.account?.role_id === 1) {
		return redirect(303, '/');
	}
};

export const actions: Actions = {
	find: async ({ request }) => {
		let username = (await request.formData()).get('user') as string;
		let userParadiseID = await prisma.account.findUnique({
			where: {
				username: username
			},
			select: {
				paradise_id: true
			}
		});
		let sels = await prisma.sel.findMany({
			where: {
				paradise_id: userParadiseID!.paradise_id
			}
		});
		// for(sel in sels) {
		// 	let selType = await prisma.type.findUnique({
		// 		where: {
		// 			type_id:sel
		// 		}
		// 	});
		// }
		return { sels, userParadiseID };
	},
	delete: async ({ request }) => {
		let selID = (await request.formData()).get('selID');
	}
};
//admin can search every account and add or remove sels
