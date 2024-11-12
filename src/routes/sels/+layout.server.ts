import { redirect } from '@sveltejs/kit';

import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (event) => {
	if (event.locals.account === null) {
		return redirect(302, '/signin?from=' + event.url.pathname.substring(1));
	} else if (event.locals.account.paradise_id === null && event.url.pathname !== '/sels/newbie') {
		return redirect(302, '/sels/newbie');
	} else if (event.locals.account.paradise_id !== null && event.url.pathname === '/sels/newbie') {
		return redirect(302, '/sels/profile');
	}
};
