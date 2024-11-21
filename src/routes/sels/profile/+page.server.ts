import type { PageServerLoad } from './$types';
import { getSelCount, getSelsWithTierDesc } from '$lib/server/database/sel';

export const load: PageServerLoad = async ({ locals }) => {
	const user = locals.account;
	const username = user?.username;
	let selCount: number = 0;
	let shownSel = await getSelsWithTierDesc(user?.paradise_id!, 5);
	selCount = await getSelCount(user?.paradise_id!);

	return { shownSel, selCount, username };
};
