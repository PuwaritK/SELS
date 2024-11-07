import { getAccount, getCurrency } from './account';
import type { account, paradise } from '@prisma/client';
import prisma from './client';

export const randomSel = async (account: account, paradise: paradise) => {
	// let generatedSel = await prisma.sel.create({
	// 	data: {
	// 		dob: new Date(Date.now()),
	// 		colour: 'grey',
	// 		weight: 69,
	// 		price: 6969,
	// 		type:,
	// 		sex:,
	// 	}
	// });
};

export const pullSel = async (account: account, pullAmount: number = 1) => {
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
