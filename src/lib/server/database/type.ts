import prisma from './client';

export const getSelType = async () => {
	let selTypes = await prisma.type.findMany();
	return selTypes;
};
