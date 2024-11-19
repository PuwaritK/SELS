import {
	validateSessionToken,
	setSessionTokenCookie,
	deleteSessionTokenCookie
} from './lib/server/auth/auth';

import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const token = event.cookies.get('session') ?? null;
	if (token === null) {
		// if user hasn't sign in
		event.locals.account = null;
		event.locals.session = null;
		return resolve(event);
	}

	const { session, account } = await validateSessionToken(token);
	if (session !== null) {
		setSessionTokenCookie(event.cookies, token, session.expiresAt);
	} else {
		deleteSessionTokenCookie(event.cookies);
	}

	event.locals.session = session;
	event.locals.account = account;
	// let response = await resolve(event);
	// response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
	// response.headers.set('Pragma', 'no-cache');
	// response.headers.set('Expires', '0');
	// return response;
	return resolve(event);
};
