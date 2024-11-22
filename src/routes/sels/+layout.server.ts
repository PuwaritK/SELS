import { redirect } from '@sveltejs/kit';

import type { LayoutServerLoad } from './$types';
import { getCurrency } from '$lib/server/database/account';

export const load: LayoutServerLoad = async (event) => {
	if (event.locals.account === null) {
		return redirect(302, '/signin?from=' + event.url.pathname.substring(1));
	} else if (event.locals.account.paradise_id === null && event.url.pathname !== '/sels/newbie') {
		return redirect(302, '/sels/newbie');
	} else if (event.locals.account.paradise_id !== null && event.url.pathname === '/sels/newbie') {
		return redirect(302, '/sels/profile');
	}
	let accountCurrency = await getCurrency(event.locals.account.user_id);
	if (event.locals.account.role_id === 2) {
		return { isAdmin: true, accountCurrency };
	}
	if (event.locals.account.role_id === 3) {
		return { isDev: true, accountCurrency };
	}
	return { accountCurrency };
};
