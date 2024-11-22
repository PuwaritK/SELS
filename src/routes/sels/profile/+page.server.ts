import type { PageServerLoad } from './$types';
import { getHighestRaritySel, getSelCount, getSelsWithTierDesc } from '$lib/server/database/sel';
import { getSelTier } from '$lib/server/database/tier';

export const load: PageServerLoad = async ({ locals }) => {
	const user = locals.account;
	const username = user?.username;
	let selCount = await getSelCount(user?.paradise_id!);
	let shownSel = await getSelsWithTierDesc(user?.paradise_id!, 5);
	let highestRarity = await getHighestRaritySel(user?.paradise_id!);
	let highestRarityName = await getSelTier(highestRarity!);
	return { shownSel, selCount, username, highestRarityName };
};
