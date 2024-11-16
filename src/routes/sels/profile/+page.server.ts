import type { sel } from '@prisma/client';
import type { PageServerLoad } from './$types';
import { getFirstSelWithTier, getSelCount } from '$lib/server/database/sel';

export const load: PageServerLoad = async ({ locals }) => {
	const user = locals.account;
	const username = user?.username;
	let shownSel: sel | null = null;
	let selCount: number = 0;
	for (let i = 5; i > 0; i--) {
		if (shownSel === null) {
			shownSel = await getFirstSelWithTier(user?.paradise_id!, i);
		} else {
			break;
		}
	}
	selCount = await getSelCount(user?.paradise_id!);
	return { shownSel, selCount, username };
};
