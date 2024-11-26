import { getAccount, getCurrency, subtractCurrency } from './account';
import type { account, paradise } from '@prisma/client';
import prisma from './client';
import type { sel } from '@prisma/client';
import { fail } from '@sveltejs/kit';

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
	const nameArray: string[] = [
		'Biku',
		'Kite',
		'Hana',
		'Daiki',
		'Hanako',
		'Hiro',
		'Magao',
		'Kazuki',
		'Mango'
	];
	let randomName = nameArray[Math.floor(Math.random() * nameArray.length)];
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
	let selTypeName = '';
	switch (randomType) {
		case 1: {
			selTypeName = 'Harp seal';
			break;
		}
		case 2: {
			selTypeName = 'Grey seal';
			break;
		}
		case 3: {
			selTypeName = 'Baikal seal';
			break;
		}
		case 4: {
			selTypeName = 'Elephant seal';
			break;
		}
		case 5: {
			selTypeName = 'Leopard seal';
			break;
		}
		case 6: {
			selTypeName = 'Sea lion';
			break;
		}
		case 7: {
			selTypeName = 'Walrus';
			break;
		}
	}
	let tierName = '';
	switch (randomTier) {
		case 1: {
			tierName = 'Common';
			break;
		}
		case 2: {
			tierName = 'Uncommon';
			break;
		}
		case 3: {
			tierName = 'Rare';
			break;
		}
		case 4: {
			tierName = 'Epic';
			break;
		}
		case 5: {
			tierName = 'Legendary';
			break;
		}
	}
	let generatedSel = await prisma.sel.create({
		data: {
			name: randomName + ' The ' + selTypeName,
			type_id: randomType,
			colour: '#' + randomColor,
			sex_id: randomSex,
			dob: new Date(Date.now()),
			weight: 8,
			price: selPrice,
			tier_id: randomTier,
			paradise_id
		}
	});
	return generatedSel;
};

export const pullSel = async (account: account, pullAmount: number = 1) => {
	if (isNaN(pullAmount)) {
		return;
	}
	const GACHACOST = 3000;
	let currency = (await getCurrency(account.user_id))!;
	let realPullAmount = pullAmount;
	pullAmount -= Math.floor(pullAmount / 10);
	let pullCost = GACHACOST * pullAmount;
	let generatedSel: sel[] = [];
	let result;
	if (currency < pullCost) {
		return (result = 'Insufficient currency.');
	} else {
		await subtractCurrency(account.user_id, pullCost);
		for (let i = 0; i < realPullAmount; i++) {
			generatedSel.push(await randomSel(account.paradise_id!));
		}
		return (result = realPullAmount);
	}
	// switch (pullAmount) {
	// 	case 1:
	// 		pullCost = GACHACOST * pullAmount;
	// 		if (currency < pullCost) {
	// 			return (result = 'Insufficient currency.');
	// 		} else {
	// 			await subtractCurrency(account.user_id, pullCost);
	// 			generatedSel.push(await randomSel(account.paradise_id!));
	// 			return (result = generatedSel);
	// 		}
	// 	case 10:
	// 		pullCost = (GACHACOST * pullAmount * 9) / 10;
	// 		if (currency < pullCost) {
	// 			return (result = 'Insufficient currency.');
	// 		} else {
	// 			await subtractCurrency(account.user_id, pullCost);
	// 			for (let i = 0; i < 10; i++) {
	// 				generatedSel.push(await randomSel(account.paradise_id!));
	// 			}
	// 			return (result = generatedSel);
	// 		}
	// }
};
