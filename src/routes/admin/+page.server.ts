import { redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';
import prisma from '$lib/server/database/client';

export const load: PageServerLoad = async (event) => {
	if (event.locals.account === null) {
		redirect(302, '/');
	}
	if (event.locals.account?.role_id === 1) {
		return redirect(303, '/');
	}
	const search = event.url.searchParams.get('search');
	if (!search) return { found: null };
	let username = search;
	let userParadiseID = await prisma.account.findUnique({
		where: {
			username: username
		},
		select: {
			paradise_id: true
		}
	});
	if (!userParadiseID) return { found: false };
	let sels =
		(await prisma.sel.findMany({
			where: {
				paradise_id: userParadiseID.paradise_id
			}
		})) || [];
	return { sels, paradise_id: userParadiseID.paradise_id, found: true };
};

// export const actions: Actions = {
// 	default: async ({ request }) => {
// 		let username = (await request.formData()).get('user') as string;
// 		let userParadiseID = await prisma.account.findUnique({
// 			where: {
// 				username: username
// 			},
// 			select: {
// 				paradise_id: true
// 			}
// 		});
// 		if (!userParadiseID) return { found: 'nope' };
// 		let sels = await prisma.sel.findMany({
// 			where: {
// 				paradise_id: userParadiseID!.paradise_id
// 			}
// 		});
// 		return { sels, userParadiseID };
// 	}
// };
//admin can search every account and remove sels
