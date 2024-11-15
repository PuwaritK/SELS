import type { Prisma, sel } from '@prisma/client';
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

// export const updateSel = async (
// 	sel_id: number,
// 	sel_name: string,
// 	sel_type: number,
// 	sel_colour: string,
// 	sel_weight: number,
// 	sel_tier: number
// ) => {
// 	const upgradeSel = await prisma.sel.update({
// 		where: {
// 			sel_id: sel_id
// 		},
// 		data: {
// 			name: sel_name,
// 			type_id: sel_type,
// 			colour: sel_colour,
// 			weight: sel_weight,
// 			tier_id: sel_tier
// 		}
// 	})
// };

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
