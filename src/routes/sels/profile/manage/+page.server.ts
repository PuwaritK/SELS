import { feedAllSel, hostSelShow, playWithSels } from '$lib/server/database/sel';
import type { PageServerLoad, Actions } from '../$types';
export const load: PageServerLoad = async ({ locals }) => {
	let lastPlay = locals.account!.last_play;
	let lastShow = locals.account!.last_show;
	let lastFeed = locals.account!.last_feed;
	return { lastPlay, lastShow, lastFeed };
};

export const actions: Actions = {
	default: async ({ request, locals }) => {
		let timeNow = new Date(Date.now());
		let formType = (await request.formData()).get('click') as string;
		switch (formType) {
			case 'play': {
				if (timeNow.getTime() - locals.account!.last_play.getTime() > 1000 * 60 * 60) {
					await playWithSels(locals.account?.user_id!);
					break;
				} else {
					return { validPlay: false };
				}
			}
			case 'show': {
				if (timeNow.getTime() - locals.account!.last_show.getTime() > 1000 * 60 * 60) {
					await hostSelShow(locals.account?.paradise_id!, locals.account?.user_id!);
					break;
				} else {
					return { validShow: false };
				}
			}
			case 'feed': {
				if (timeNow.getTime() - locals.account!.last_feed.getTime() > 1000 * 60 * 60) {
					await feedAllSel(locals.account?.paradise_id!, locals.account?.user_id!);
					break;
				} else {
					return { validFeed: false };
				}
			}
		}
	}
};
