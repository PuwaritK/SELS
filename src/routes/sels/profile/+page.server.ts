import type { sel } from '@prisma/client';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const userParadiseID = locals.account?.paradise_id;
	const shownSel: sel | null = null;
};
