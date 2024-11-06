import { isUsernameExist } from '$lib/server/database/account.js';
import prisma from '$lib/server/database/client.js';
import { fail } from '@sveltejs/kit';
import { hash } from 'argon2';

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const username = formData.get('username') as string;
		const password = formData.get('password') as string;
		const cpassword = formData.get('confirm_password') as string;

		try {
			if (password != cpassword) {
				throw new Error('Password mismatch');
			}
			let isExist = await isUsernameExist(username);
			if (isExist) {
				throw new Error('Username already exists');
			}
			const account = await prisma.account.create({
				data: {
					username,
					password: await hash(password, { hashLength: 32 })
				}
			});
			return { created: true };
		} catch (error) {
			return fail(422, {
				error: (error as Error).message
			});
		}
	}
};

export const load = () => {
	return {};
};
