import prisma from './client';

export const getSelTier = async () => {
	let selTier = await prisma.tier.findMany();
	return selTier;
};
