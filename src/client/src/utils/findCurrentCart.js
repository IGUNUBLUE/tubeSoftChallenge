import { CART_STATES, PAYMENT_STATE } from "../common/constants"

const findCurrentCart = (carts) => {
	if (carts.length) {
		const currentCart = carts.find(
			({ isCurrent, state, paymentState }) =>
				isCurrent === true &&
				state === CART_STATES.OPEN &&
				paymentState === PAYMENT_STATE.UNPAID
		);

		return currentCart
	}

	return {}
};

export default findCurrentCart;
