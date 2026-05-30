import prisma from './client';

export const getSelSex = async () => {
	const sexTypes = await prisma.sex.findMany();
	return sexTypes;
};
