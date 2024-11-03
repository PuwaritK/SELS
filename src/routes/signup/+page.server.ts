import { isUserExist } from '$lib/database/account.js';
import prisma from '$lib/database/client.js';
import { fail } from '@sveltejs/kit';
let created = false;
export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		try {
			if ((formData.get('password') as string) != (formData.get('confirm_password') as string)) {
				throw new Error('Password mismatch');
			}
			let isExist = await isUserExist(formData.get('username') as string);
			if (isExist) {
				throw new Error('Username already exists');
			}
			const account = await prisma.account.create({
				data: {
					username: formData.get('username') as string,
					password: formData.get('password') as string
				}
			});
			created = true;
		} catch (error) {
			return fail(422, {
				error: (error as Error).message
			});
		}
	}
};

export const load = () => {
	return { created: created };
};
