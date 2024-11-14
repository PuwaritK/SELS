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

export const createParadise = async (paradiseName: string) => {
	const newParadise = await prisma.paradise.create({
		data: {
			name: paradiseName,
			rating: 1
		}
	})
};

export const addSelToParadise = async (sel_id: number, paradise_id: number) => {
	const moveSel = await prisma.sel.update({
		where: {
			sel_id: sel_id
		},
		data: {
			paradise_id: paradise_id
		}
	})
};

export const removeSelFromParadise = async (sel_id: number) => {
	const killSel = await prisma.sel.delete({
		where: {
			sel_id: sel_id
		}
	})
};

export const transferSelToParadise = async (sel_id: number, from_pid: number, to_pid: number) => {
	const transferSel = await addSelToParadise(sel_id, to_pid);
};
