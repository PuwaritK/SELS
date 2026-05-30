import type { PageServerLoad } from './$types';
import { getHighestRaritySel, getSelCount, getSelsWithTierDesc } from '$lib/server/database/sel';
import { getSelTier } from '$lib/server/database/tier';

export const load: PageServerLoad = async ({ locals }) => {
	const user = locals.account;
	const username = user?.username;
	const selCount = await getSelCount(user?.paradise_id!);
	const shownSel = await getSelsWithTierDesc(user?.paradise_id!, 5);
	for (let index = 0; index < shownSel.length; index++) {
		switch (shownSel[index].type.type_id) {
			case 1:
				shownSel[index].type.type_name = 'Harp seal';
				break;
			case 2:
				shownSel[index].type.type_name = 'Grey seal';
				break;
			case 3:
				shownSel[index].type.type_name = 'Baikal seal';
				break;
			case 4:
				shownSel[index].type.type_name = 'Elephant seal';
				break;
			case 5:
				shownSel[index].type.type_name = 'Leopard seal';
				break;
			case 6:
				shownSel[index].type.type_name = 'Sea lion';
				break;
			case 7:
				shownSel[index].type.type_name = 'Walrus';
				break;
		}
		switch (shownSel[index].sex.sex_id) {
			case 1:
				shownSel[index].sex.name = 'Male';
				break;
			case 2:
				shownSel[index].sex.name = 'Female';
				break;
			case 3:
				shownSel[index].sex.name = 'Special';
				break;
		}
	}
	const highestRarity = await getHighestRaritySel(user?.paradise_id!);
	const highestRarityName = await getSelTier(highestRarity!);
	return { shownSel, selCount, username, highestRarityName };
};
