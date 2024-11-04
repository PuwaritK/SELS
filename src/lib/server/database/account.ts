import prisma from './client';

export const isUsernameExist = async (username: string) => {
	const exist = await prisma.account.findUnique({
		where: {
			username
		}
	});
	return exist != null;
};

export const isAccountExist = async (username: string, password: string) => {
	const exist = await prisma.account.findUnique({
		where: {
			username,
			password
		}
	});
	return exist != null;
};

export const getRole = async (user_id: number) => {
	const role = await prisma.account.findUnique({
		where: {
			user_id: user_id
		}
	});
	return role?.role_id;
};

export const getCurrency = async (user_id: number) => {
	const currency = await prisma.account.findUnique({
		where: {
			user_id
		}
	});
	return currency?.currency;
};
