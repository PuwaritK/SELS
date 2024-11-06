import { getAccount, getCurrency } from './account';
import type { account } from '@prisma/client';
export const randomSel = async (account: account, pullAmount: number = 1) => {
	const GACHACOST = 300;
	let currency = (await getCurrency(account.user_id)) as number;
	switch (pullAmount) {
		case 1:
			if (currency < GACHACOST * pullAmount) {
				return;
			} else {
				return {};
			}
		case 10:
			if (currency < (GACHACOST * pullAmount * 9) / 10) {
				return;
			} else {
				return {};
			}
	}
};
