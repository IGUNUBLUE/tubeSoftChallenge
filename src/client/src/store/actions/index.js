import axios from "axios";

import { GET_PRODUCTS } from "./types";

const API_URL = process.env.REACT_APP_BACK_URL || "http://localhost:3001";
// Products
export const getProducts = () => async (dispatch) => {
console.log("#######" ,API_URL);

	const { data } = await axios.get(`${API_URL}/api/products`);
	dispatch({ type: GET_PRODUCTS, payload: data });
};
// Users
