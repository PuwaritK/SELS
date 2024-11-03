import prisma from './client';

export const isUserExist = async (username: string) => {
	const exist = await prisma.account.findUnique({
		where: {
			username: username
		}
	});
	if (exist) {
		return true;
	} else {
		return false;
	}
};

export const getRole = async (user_id: number) => {
	const role = await prisma.account.findUnique({
		where: {
			user_id: user_id
		}
	});
	return role?.user_id;
};
