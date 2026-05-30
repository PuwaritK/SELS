import type { account } from '@prisma/client';
import prisma from './client';
import randomName from 'random-name';

export const randomSelData = (paradise_id: number) => {
	const randomColor = Math.floor(Math.random() * 16777215).toString(16);
	const randomType = Math.floor(Math.random() * 7) + 1;
	let randomSex = Math.floor(Math.random() * 100) + 1;
	if (randomSex === 100) {
		randomSex = 3;
	} else if (randomSex % 2 === 0) {
		randomSex = 1;
	} else {
		randomSex = 2;
	}

	const generatedName = randomName.first();
	let randomTier = Math.floor(Math.random() * 100) + 1;

	if (randomTier >= 99) {
		randomTier = 5;
	} else if (randomTier >= 91) {
		randomTier = 4;
	} else if (randomTier >= 76) {
		randomTier = 3;
	} else if (randomTier >= 51) {
		randomTier = 2;
	} else {
		randomTier = 1;
	}

	let selTypeName = '';
	switch (randomType) {
		case 1:
			selTypeName = 'Harp seal';
			break;
		case 2:
			selTypeName = 'Grey seal';
			break;
		case 3:
			selTypeName = 'Baikal seal';
			break;
		case 4:
			selTypeName = 'Elephant seal';
			break;
		case 5:
			selTypeName = 'Leopard seal';
			break;
		case 6:
			selTypeName = 'Sea lion';
			break;
		case 7:
			selTypeName = 'Walrus';
			break;
	}

	return {
		name: generatedName + ' The ' + selTypeName,
		type_id: randomType,
		colour: '#' + randomColor.padStart(6, '0'),
		sex_id: randomSex,
		dob: new Date(),
		weight: 8,
		price: 0,
		tier_id: randomTier,
		paradise_id
	};
};

export const randomSel = async (paradise_id: number) => {
	return await prisma.sel.create({
		data: randomSelData(paradise_id)
	});
};

export const pullSel = async (account: account, pullAmount: number = 1) => {
	if (isNaN(pullAmount) || pullAmount <= 0) {
		return 'Invalid pull amount.';
	}

	const GACHACOST = 3000;
	// Apply 10% discount for bulk pulls (except for 1x)
	const effectivePullAmount = pullAmount === 1 ? 1 : pullAmount * 0.9;
	const pullCost = Math.floor(GACHACOST * effectivePullAmount);

	try {
		return await prisma.$transaction(async (tx) => {
			const userAccount = await tx.account.findUnique({
				where: { user_id: account.user_id },
				select: { currency: true }
			});

			if (!userAccount || userAccount.currency < pullCost) {
				throw new Error('Insufficient currency.');
			}

			// Deduct currency
			await tx.account.update({
				where: { user_id: account.user_id },
				data: { currency: { decrement: pullCost } }
			});

			// Generate Sels
			const selsToCreate = Array.from({ length: pullAmount }, () =>
				randomSelData(account.paradise_id!)
			);

			// Use createMany if supported by the provider, but SQLite doesn't support returning values with createMany
			// and we might want to return the count or objects.
			// Since we want to ensure atomicity, creating them one by one in the transaction is fine for small amounts.
			// For performance, we can use createMany and just return the count.
			await tx.sel.createMany({
				data: selsToCreate
			});

			return pullAmount;
		});
	} catch (error: any) {
		return error.message;
	}
};
