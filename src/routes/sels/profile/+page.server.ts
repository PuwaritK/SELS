import type { sel } from '@prisma/client';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const userParadiseID = locals.account?.paradise_id;
	const shownSel: sel | null = null; //TODO: implement getting Sel to be shown
	const selCount: number | null = null; //TODO: implement counting sels
};
