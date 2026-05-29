import prisma from './client';

export const executeTrade = async (buyer_id: number, sel_id: number) => {
	return await prisma.$transaction(async (tx) => {
		// 1. Get Sel and verify it's for sale
		const sel = await tx.sel.findUnique({
			where: { sel_id },
			include: {
				paradise: {
					include: {
						account: true
					}
				}
			}
		});

		if (!sel || sel.price <= 0) {
			throw new Error('Sel is not for sale');
		}

		if (!sel.paradise_id) {
			throw new Error('Sel does not belong to any paradise');
		}

		// 2. Get Buyer Account
		const buyer = await tx.account.findUnique({
			where: { user_id: buyer_id }
		});

		if (!buyer || !buyer.paradise_id) {
			throw new Error('Buyer account not found or has no paradise');
		}

		if (buyer.currency < sel.price) {
			throw new Error('Insufficient funds');
		}

		if (buyer.paradise_id === sel.paradise_id) {
			throw new Error('You cannot buy your own Sel');
		}

		// 3. Find Seller Account
		const sellerAccount = await tx.account.findFirst({
			where: { paradise_id: sel.paradise_id }
		});

		if (!sellerAccount) {
			throw new Error('Seller account not found');
		}

		// 4. Perform Trade
		// Deduct from Buyer
		await tx.account.update({
			where: { user_id: buyer_id },
			data: {
				currency: {
					decrement: sel.price
				}
			}
		});

		// Add to Seller
		await tx.account.update({
			where: { user_id: sellerAccount.user_id },
			data: {
				currency: {
					increment: sel.price
				}
			}
		});

		// Transfer Sel ownership and reset price
		const updatedSel = await tx.sel.update({
			where: { sel_id },
			data: {
				paradise_id: buyer.paradise_id,
				price: 0
			}
		});

		return {
			success: true,
			sel: updatedSel,
			price: sel.price
		};
	});
};
