import prisma from './client';
import { addCurrency } from './account';

export type CreateOrderInput = {
	user_id: number;
	amount_spc: number;
	price_fiat: number;
	currency_code: string;
	payment_method: string;
};

export const createOrder = async (input: CreateOrderInput) => {
	return await prisma.order.create({
		data: {
			user_id: input.user_id,
			amount_spc: input.amount_spc,
			price_fiat: input.price_fiat,
			currency_code: input.currency_code,
			payment_method: input.payment_method,
			status: 'PENDING'
		}
	});
};

export const completeOrder = async (order_id: string) => {
	return await prisma.$transaction(async (tx) => {
		const order = await tx.order.findUnique({
			where: { order_id }
		});

		if (!order || order.status !== 'PENDING') {
			throw new Error('Order not found or already processed');
		}

		// Update order status
		const updatedOrder = await tx.order.update({
			where: { order_id },
			data: { status: 'COMPLETED' }
		});

		// Add currency to account
		await tx.account.update({
			where: { user_id: order.user_id },
			data: {
				currency: {
					increment: order.amount_spc
				}
			}
		});

		return updatedOrder;
	});
};

export const getOrdersByUser = async (user_id: number) => {
	return await prisma.order.findMany({
		where: { user_id },
		orderBy: { created_at: 'desc' }
	});
};
