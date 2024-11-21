import prisma from './client';

export const getSelSex = async () => {
	let sexTypes = await prisma.sex.findMany();
	return sexTypes;
};
