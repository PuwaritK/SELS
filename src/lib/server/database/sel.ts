import type { Prisma, sel, account } from '@prisma/client';
import prisma from './client';

export const createSel = async (
	sel_name: string,
	sel_type: number,
	sel_colour: string,
	sel_sex: number,
	sel_tier: number,
	sel_paradise: number,
	sel_weight: number,
	sel_xp: number,
	sel_price: number
) => {
	const createSel = await prisma.sel.create({
		data: {
			name: sel_name,
			type_id: sel_type,
			colour: sel_colour,
			dob: new Date(Date.now()),
			weight: sel_weight,
			show_xp: sel_xp,
			price: sel_price,
			tier_id: sel_tier,
			sex_id: sel_sex,
			paradise_id: sel_paradise
		}
	});
};

export const updateSel = async (
	sel_id: number,
	sel_name: string,
	sel_type: number,
	sel_colour: string,
	sel_sex: number,
	sel_dob: Date,
	sel_weight: number,
	sel_showxp: number,
	sel_price: number,
	sel_tier: number
) => {
	const upgradeSel = await prisma.sel.update({
		where: {
			sel_id: sel_id
		},
		data: {
			name: sel_name,
			type_id: sel_type,
			colour: sel_colour,
			sex_id: sel_sex,
			dob: sel_dob,
			weight: sel_weight,
			show_xp: sel_showxp,
			price: sel_price,
			tier_id: sel_tier
		}
	});
};

export const deleteSel = async (sel_id: number) => {
	const killSel = await prisma.sel.delete({
		where: {
			sel_id: sel_id
		}
	});
};

export const searchSel = async (searchOptions: SearchOptions, username: string) => {
	//TODO: for patton
};

export const getAllSel = async (userID: number) => {
	//TODO: for patton
};

export const getFirstSelWithTier = async (paradise_id: number, tier_id: number) => {
	return await prisma.sel.findFirst({
		where: {
			paradise_id,
			tier_id
		}
	});
};

export const getSelsWithTierDesc = async (paradise_id: number, numberOfSels: number) => {
	return await prisma.sel.findMany({
		take: numberOfSels,
		where: {
			paradise_id
		},
		orderBy: {
			tier_id: 'desc'
		}
	});
};

export const getSelCount = async (paradise_id: number) => {
	return await prisma.sel.count({
		where: {
			paradise_id
		}
	});
};

export const feedAllSel = async (paradise_id: number, user_id: number) => {
	let account_sels_count = await prisma.sel.count({
		where: {
			paradise_id
		}
	});

	await prisma.account.update({
		where: {
			user_id
		},
		data: {
			currency: {
				decrement: account_sels_count
			}
		}
	});

	await prisma.sel.updateMany({
		where: {
			paradise_id
		},
		data: {
			weight: {
				increment: Math.random() / 10
			}
		}
	});
	await prisma.account.update({
		where: {
			user_id
		},
		data: {
			last_feed: new Date(Date.now())
		}
	});
};

export const hostSelShow = async (paradise_id: number, user_id: number) => {
	await prisma.sel.updateMany({
		where: {
			paradise_id
		},
		data: {
			show_xp: {
				increment: 10
			}
		}
	});

	let legend_count = await prisma.sel.count({
		where: {
			paradise_id,
			tier_id: 5
		}
	});
	let epic_count = await prisma.sel.count({
		where: {
			paradise_id,
			tier_id: 4
		}
	});
	let rare_count = await prisma.sel.count({
		where: {
			paradise_id,
			tier_id: 3
		}
	});
	let uncommon_count = await prisma.sel.count({
		where: {
			paradise_id,
			tier_id: 2
		}
	});
	let common_count = await prisma.sel.count({
		where: {
			paradise_id,
			tier_id: 1
		}
	});
	let spcEarned =
		legend_count * 500 + epic_count * 50 + rare_count * 25 + uncommon_count * 10 + common_count * 5;

	await prisma.account.update({
		where: {
			user_id
		},
		data: {
			currency: {
				increment: spcEarned
			},
			last_show: new Date(Date.now())
		}
	});
};

export const playWithSels = async (user_id: number) => {
	await prisma.account.update({
		where: {
			user_id
		},
		data: {
			currency: {
				increment: 6000
			},
			last_play: new Date(Date.now())
		}
	});
};

export const isSelExist = async (sel_id: number) => {
	let sel = await prisma.sel.findFirst({
		where: {
			sel_id
		}
	});
	return sel !== null;
};

export const getSel = async (sel_id: number) => {
	let sel = await prisma.sel.findFirst({
		where: {
			sel_id
		}
	});
	return sel;
};

export type SearchOptions = {
	name: string | null;
	type_id: number | null;
	color: string | null;
	sex_id: number | null;
	weight: number | null;
	show_xp: number | null;
	price: number | null;
	tier_id: number | null;
};
