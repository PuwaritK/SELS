import type { Prisma, sel } from '@prisma/client';
import prisma from './client';

export const createSel = async (
	sel_name: string,
	sel_type: number,
	sel_colour: string,
	sel_sex: number,
	sel_weight: number = 8,
	sel_tier: number
) => {
	//TODO: for patton
};

export const updateSel = async (
	sel_id: number,
	sel_name: string,
	sel_type: number,
	sel_colour: string,
	sel_sex: number
	//add or remove more params as needed
) => {
	//TODO: for patton
};

export const deleteSel = async (
	sel_id: number
	//add or remove more params as needed
) => {
	//TODO: for patton
};

export const searchSel = async (searchOptions: SearchOptions, username: string) => {
	//TODO: for patton
};

export const getAllSel = async (username: string) => {
	//TODO: for patton
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
