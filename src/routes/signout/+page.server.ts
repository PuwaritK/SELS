import { deleteSessionTokenCookie, invalidateSession } from '$lib/server/auth/auth';
import { fail } from '@sveltejs/kit';

export const load = async (event) => {
	if (!event.locals.session) {
		throw fail(401, { message: "You're not logged in." });
	} else {
		await invalidateSession(event.locals.session?.id as string);
		deleteSessionTokenCookie(event.cookies);
	}
};
