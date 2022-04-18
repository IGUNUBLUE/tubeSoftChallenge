import axios from "axios";

import {
	GET_PRODUCTS,
	GET_USER,
	LOG_OUT,
	CREATE_CART,
	GET_CARTS,
	CLEAR_CART,
} from "./types";

const API_URL = process.env.REACT_APP_BACK_URL || "http://localhost:3001";

// Cart
export const getCarts = (userId) => async (dispatch) => {
	try {
		const { data } = await axios.get(`${API_URL}/api/carts/${userId}`);

		dispatch({ type: GET_CARTS, payload: data });
	} catch (error) {
		console.log(error);
	}
};
export const createCart = (cartItem) => async (dispatch) => {
	try {
		const { data } = await axios.post(`${API_URL}/api/carts/create`, cartItem);

		dispatch({ type: CREATE_CART, payload: [data] });
	} catch (error) {
		console.log(error);
	}
};
export const clearCart = () => async (dispatch) => {
	try {
		dispatch({ type: CLEAR_CART, payload: [] });
	} catch (error) {
		console.log(error);
	}
};

// Products
export const getProducts = () => async (dispatch) => {
	try {
		const { data } = await axios.get(`${API_URL}/api/products`);
		dispatch({ type: GET_PRODUCTS, payload: data });
	} catch (error) {
		console.log(error);
	}
};

// Users
export const sigIn = (email, password, navigate, route) => async (dispatch) => {
	try {
		const { data } = await axios.post(`${API_URL}/api/users`, {
			email,
			password,
		});

		dispatch({ type: GET_USER, payload: data });

		if (data && data.email) {
			dispatch(getProducts());
			dispatch(getCarts(data.id));
			navigate(route);
		}
	} catch (error) {
		console.log(error);
	}
};
export const logOut = () => (dispatch) => {
	try {
		dispatch({ type: LOG_OUT, payload: {} });
		dispatch(clearCart());
	} catch (error) {
		console.log(error);
	}
};
