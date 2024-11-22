import prisma from './client';

export const getAllSelTier = async () => {
	let selTier = await prisma.tier.findMany();
	return selTier;
};

export const getSelTier = async (tier_id: number) => {
	let selTier = await prisma.tier.findFirst({
		where: {
			tier_id
		},
		select: {
			name: true
		}
	});
	return selTier;
};
