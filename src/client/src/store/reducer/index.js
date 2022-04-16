import { GET_PRODUCTS, GET_USER, LOG_OUT } from "../actions/types";

const initialState = {
	products: [],
	user: null,
};

function reducer(state = initialState, action) {
	switch (action.type) {
		case GET_PRODUCTS:
			return {
				...state,
				products: action.payload,
			};
		case GET_USER:
			return {
				...state,
				user: action.payload,
			};
		case LOG_OUT:
			return {
				...state,
				user: action.payload,
			};
		default:
			return state;
	}
}

export default reducer;
