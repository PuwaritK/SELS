import { deleteSessionTokenCookie, invalidateSession } from '$lib/server/auth/auth';

export const load = async (event) => {
	try {
		await invalidateSession(event.locals.session?.id as string);
		deleteSessionTokenCookie(event.cookies);
	} catch {}
};
