import { redirect } from '@sveltejs/kit';

import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (event) => {
	console.log(event.locals.user);
	if (event.locals.user === null) {
		return redirect(302, '/signin?from=' + event.url.pathname.substring(1));
	}
	// ...
};