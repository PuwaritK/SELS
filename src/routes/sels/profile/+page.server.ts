import type { sel } from '@prisma/client';
import type { PageServerLoad } from './$types';
import { getFirstSelWithTier } from '$lib/server/database/sel';

export const load: PageServerLoad = async ({ locals }) => {
	const userParadiseID = locals.account?.paradise_id;
	let shownSel: sel | null = null; //TODO: implement getting Sel to be shown
	let selCount: number | null = null; //TODO: implement counting sels
	for (let i = 5; i > 0; i--) {
		if (shownSel === null) {
			shownSel = await getFirstSelWithTier(userParadiseID!, i);
		} else {
			break;
		}
	}
	return { shownSel, selCount };
};
