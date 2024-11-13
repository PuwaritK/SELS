import { getAccount, getCurrency } from './account';
import type { account, paradise } from '@prisma/client';
import prisma from './client';
import { first } from 'random-name';

export const randomSel = async (paradise_id: number) => {
	let randomColor = Math.floor(Math.random() * 16777215).toString(16);
	let randomType = Math.floor(Math.random() * (7 - 1 + 1) + 1);
	let randomSex = Math.floor(Math.random() * (100 - 1 + 1) + 1);
	if (randomSex === 100) {
		// 1% secret third sex
		randomSex = 3;
	} else if (randomSex % 2 === 0) {
		// male
		randomSex = 1;
	} else {
		// female
		randomSex = 2;
	}
	let randomName = first();
	let randomTier = Math.floor(Math.random() * (100 - 1 + 1) + 1);
	if (randomTier >= 99) {
		// legendary
		randomTier = 5;
	} else if (randomTier >= 91) {
		// epic
		randomTier = 4;
	} else if (randomTier >= 76) {
		// rare
		randomTier = 3;
	} else if (randomTier >= 51) {
		// uncommon
		randomTier = 2;
	} else {
		// common
		randomTier = 1;
	}
	let selPrice = 0;
	switch (randomTier) {
		case 5: {
			selPrice = 50000;
			break;
		}
		case 4: {
			selPrice = 5000;
			break;
		}
		case 3: {
			selPrice = 2500;
			break;
		}
		case 2: {
			selPrice = 1000;
			break;
		}
		case 1: {
			selPrice = 500;
			break;
		}
	}
	await prisma.sel.create({
		data: {
			name: randomName,
			type_id: randomType,
			colour: randomColor,
			sex_id: randomSex,
			dob: new Date(Date.now()),
			weight: 8,
			price: selPrice,
			tier_id: randomTier,
			paradise_id
		}
	});
};

export const pullSel = async (account: account, pullAmount: number = 1) => {
	const GACHACOST = 3000;
	let currency = (await getCurrency(account.user_id)) as number;
	switch (pullAmount) {
		case 1:
			if (currency < GACHACOST * pullAmount) {
				throw new Error('Insufficient currency.');
			} else {
				await randomSel(account.paradise_id as number);
				return;
			}
		case 10:
			if (currency < (GACHACOST * pullAmount * 9) / 10) {
				throw new Error('Insufficient currency.');
			} else {
				for (let i = 0; i < 10; i++) {
					await randomSel(account.paradise_id as number);
				}
				return;
			}
	}
};
