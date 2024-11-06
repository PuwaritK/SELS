import prisma from './client';
import { verify } from 'argon2';
export const isUsernameExist = async (username: string) => {
	const exist = await prisma.account.findUnique({
		where: {
			username
		}
	});
	return exist != null;
};

export const isAccountExist = async (username: string, password: string) => {
	const userExist = await prisma.account.findUnique({
		where: {
			username
		}
	});
	if (!userExist) return false;
	let dbpassword = userExist?.password;
	return await verify(dbpassword, password);
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

export const getAccount = async (username: string) => {
	const account = await prisma.account.findUnique({
		where: {
			username
		}
	});
	return account;
};
