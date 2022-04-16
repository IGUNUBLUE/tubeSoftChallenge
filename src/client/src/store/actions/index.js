import axios from "axios";

import { GET_PRODUCTS, GET_USER, LOG_OUT } from "./types";

const API_URL = process.env.REACT_APP_BACK_URL || "http://localhost:3001";
// Products
export const getProducts = () => async (dispatch) => {
	const { data } = await axios.get(`${API_URL}/api/products`);
	dispatch({ type: GET_PRODUCTS, payload: data });
};
// Users
export const sigIn = (email, password, navigate, route) => async (dispatch) => {
	const { data } = await axios.post(`${API_URL}/api/users`, {
		email,
		password,
	});

	dispatch({ type: GET_USER, payload: data });
	
	if(data && data.email){
		navigate(route);
	}
};

export const logOut = () => (dispatch) => {
	dispatch({ type: LOG_OUT, payload: null});
};