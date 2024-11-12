import prisma from './client';

export const verifyParadiseName = async (paradiseName: string) => {
	const isPNameExist = await prisma.paradise.findUnique({
		where: { name: paradiseName }
	});
	return isPNameExist !== null;
};

export const getParadiseID = async (paradiseName: string) => {
	const paradiseID = await prisma.paradise.findUnique({
		where: { name: paradiseName },
		select: {
			paradise_id: true
		}
	});
	return paradiseID;
};

export const createParadise = async (
	paradiseName: string
	//add or remove params as needed
) => {
	//TODO: for patton
};

export const addSelToParadise = async (
	sel_id: number,
	paradise_id: number
	//add or remove params as needed
) => {
	//TODO: for patton
};

export const removeSelFromParadise = async (
	sel_id: number,
	paradise_id: number
	//add or remove params as needed
) => {
	//TODO: for patton
};

export const transferSelToParadise = async (
	sel_id: number,
	paradise1_id: number,
	paradise2_id: number
	//add or remove params as needed
) => {
	//TODO: for patton
};
