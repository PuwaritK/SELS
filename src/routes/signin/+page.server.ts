import { isAccountExist, getAccount } from '$lib/server/database/account.js';
import { fail, redirect } from '@sveltejs/kit';
import {
	generateSessionToken,
	createSession,
	setSessionTokenCookie
} from '$lib/server/auth/auth.js';
import type { account } from '@prisma/client';

export const actions = {
	default: async ({ cookies, request, url }) => {
		const formData = await request.formData();
		const username = formData.get('username') as string;
		const password = formData.get('password') as string;
		let account: account | null = null;
		try {
			let isAccExist = await isAccountExist(username, password);
			if (!isAccExist) {
				throw new Error('The Username or Password is Incorrect. Try again.');
			}

			account = await getAccount(username);
			let userId = account?.user_id as number;

			const token = generateSessionToken();
			const session = createSession(token, userId);
			setSessionTokenCookie(cookies, token, (await session).expiresAt);
		} catch (error) {
			return fail(422, {
				error: (error as Error).message
			});
		}
		if (url.searchParams.get('from')) {
			redirect(302, '/' + url.searchParams.get('from'));
		} else if (!account!.paradise_id) {
			redirect(302, '/sels/newbie');
		} else {
			redirect(302, '/sels/profile');
		}
	}
};

export const load = () => {
	return {};
};
