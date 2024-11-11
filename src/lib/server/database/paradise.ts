import prisma from './client';

export const verifyParadiseName = async (paradiseName: string) => {
	const isPNameExist = await prisma.paradise.findUnique({
		where: { name: paradiseName }
	});
	console.log(isPNameExist);
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
