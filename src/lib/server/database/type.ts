import prisma from './client';

export const getSelType = async () => {
	const selTypes = await prisma.type.findMany();
	return selTypes;
};
