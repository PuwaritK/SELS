import { feedAllSel, hostSelShow, playWithSels } from '$lib/server/database/sel';
import type { PageServerLoad, Actions } from '../$types';
export const load: PageServerLoad = async ({ locals }) => {
	const timeNow = new Date(Date.now());
	const lastPlay = locals.account!.last_play;
	const lastShow = locals.account!.last_show;
	const lastFeed = locals.account!.last_feed;
	const validPlay = timeNow.getTime() - locals.account!.last_play.getTime() > 1000 * 60 * 60;
	const validShow = timeNow.getTime() - locals.account!.last_show.getTime() > 1000 * 60 * 60;
	const validFeed = timeNow.getTime() - locals.account!.last_feed.getTime() > 1000 * 60 * 60;
	return { lastPlay, lastShow, lastFeed, validFeed, validPlay, validShow };
};

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const timeNow = new Date(Date.now());
		const formType = (await request.formData()).get('click') as string;
		switch (formType) {
			case 'play': {
				if (timeNow.getTime() - locals.account!.last_play.getTime() > 1000 * 60 * 60) {
					const playResult = await playWithSels(locals.account?.user_id!);
					return { successPlay: true, playResult };
				}
				return { validPlay: false };
			}
			case 'show': {
				if (timeNow.getTime() - locals.account!.last_show.getTime() > 1000 * 60 * 60) {
					const showResult = await hostSelShow(
						locals.account?.paradise_id!,
						locals.account?.user_id!
					);
					return { successShow: true, showResult };
				}
				return { validShow: false };
			}
			case 'feed': {
				if (timeNow.getTime() - locals.account!.last_feed.getTime() > 1000 * 60 * 60) {
					const feedResult = await feedAllSel(
						locals.account?.paradise_id!,
						locals.account?.user_id!
					);
					return { successFeed: true, feedResult };
				}
				return { validFeed: false };
			}
		}
	}
};
