import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import prisma from '$lib/server/database/client';

export const load: PageServerLoad = async (event) => {
	if (event.locals.account === null) {
		redirect(302, '/');
	}
	if (event.locals.account?.role_id !== 3) {
		return redirect(303, '/');
	}
	const search = event.url.searchParams.get('search');
	if (!search) return { found: null };
	const username = search;
	const userParadiseID = await prisma.account.findUnique({
		where: {
			username: username
		},
		select: {
			paradise_id: true
		}
	});
	if (!userParadiseID) return { found: false };
	const sels =
		(await prisma.sel.findMany({
			where: {
				paradise_id: userParadiseID.paradise_id
			}
		})) || [];
	return { sels, paradise_id: userParadiseID.paradise_id, found: true };
};

//dev can do everything to any accounts
