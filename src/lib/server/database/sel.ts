import type { Prisma, sel } from '@prisma/client';
import prisma from './client';
import type { searchOptions } from './searchOptions';

export const createSel = async (
	sel_name: string,
	sel_type: number,
	sel_colour: string,
	sel_sex: number
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

export const searchSel = async (searchOptions: searchOptions, username: string) => {
	//TODO: for patton
};

export const getAllSel = async (username: string) => {
	//TODO: for patton
};
