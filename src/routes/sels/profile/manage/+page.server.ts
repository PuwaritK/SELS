import { feedAllSel, hostSelShow, playWithSels } from '$lib/server/database/sel';
import type { PageServerLoad, Actions } from '../$types';
export const load: PageServerLoad = async ({ locals }) => {
	let timeNow = new Date(Date.now());
	let lastPlay = locals.account!.last_play;
	let lastShow = locals.account!.last_show;
	let lastFeed = locals.account!.last_feed;
	let validPlay = timeNow.getTime() - locals.account!.last_play.getTime() > 1000 * 60 * 60;
	let validShow = timeNow.getTime() - locals.account!.last_show.getTime() > 1000 * 60 * 60;
	let validFeed = timeNow.getTime() - locals.account!.last_feed.getTime() > 1000 * 60 * 60;
	return { lastPlay, lastShow, lastFeed, validFeed, validPlay, validShow };
};

export const actions: Actions = {
	default: async ({ request, locals }) => {
		let timeNow = new Date(Date.now());
		let formType = (await request.formData()).get('click') as string;
		switch (formType) {
			case 'play': {
				if (timeNow.getTime() - locals.account!.last_play.getTime() > 1000 * 60 * 60) {
					let playResult = await playWithSels(locals.account?.user_id!);
					return { successPlay: true, playResult };
				}
				return { validPlay: false };
			}
			case 'show': {
				if (timeNow.getTime() - locals.account!.last_show.getTime() > 1000 * 60 * 60) {
					let showResult = await hostSelShow(
						locals.account?.paradise_id!,
						locals.account?.user_id!
					);
					return { successShow: true, showResult };
				}
				return { validShow: false };
			}
			case 'feed': {
				if (timeNow.getTime() - locals.account!.last_feed.getTime() > 1000 * 60 * 60) {
					let feedResult = await feedAllSel(locals.account?.paradise_id!, locals.account?.user_id!);
					return { successFeed: true, feedResult };
				}
				return { validFeed: false };
			}
		}
	}
};
