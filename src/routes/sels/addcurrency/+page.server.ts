import type { Actions, PageServerLoad } from './$types';
import { createOrder, completeOrder } from '$lib/server/database/order';
import { fail } from '@sveltejs/kit';

export const load: PageServerLoad = async () => {};

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const data = await request.formData();
		const amount = parseInt(data.get('amount') as string);
		const price = parseFloat(data.get('price') as string);
		const method = data.get('method') as string;
		const userId = locals.account?.user_id;

		if (!userId) {
			return fail(401, { error: 'You must be logged in to purchase currency.' });
		}

		try {
			// 1. Create a PENDING order
			const order = await createOrder({
				user_id: userId,
				amount_spc: amount,
				price_fiat: price,
				currency_code: 'USD',
				payment_method: method
			});
			// 2. Simulate payment processing delay (1.5 seconds)
			await new Promise((resolve) => setTimeout(resolve, 1500));

			// 3. Complete the order (updates status to COMPLETED and increments user currency)
			const completedOrder = await completeOrder(order.order_id);

			return {
				success: true,
				amount: completedOrder.amount_spc,
				orderId: completedOrder.order_id
			};
		} catch (error: any) {
			console.error('Payment error:', error);
			return fail(500, { error: 'Failed to process payment. Please try again.' });
		}
	}
};
