import { useEffect, useId, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, Grid } from "@material-ui/core";

import useStyles from "./styles";
import Navbar from "../Navbar";
import CardComponent from "../Card";
import findCurrentCart from "../../utils/findCurrentCart";

const Home = () => {
	const navigate = useNavigate();
	const prefixId = useId();
	const classes = useStyles();
	const products = useSelector((state) => state.products);
	const user = useSelector((state) => state.user);
	const carts = useSelector((state) => state.carts);
	const [totalCartItems, setTotalCartItems] = useState(0);
	// verify login
	useEffect(() => {
		if (!user) {
			navigate("/");
		} else {
			if (!user.email) {
				navigate("/");
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	// Total cart Items
	useEffect(() => {
		const currentCart = findCurrentCart(carts);

		if (currentCart && currentCart.products && currentCart.products.length) {
			setTotalCartItems(currentCart.products.length);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Box className={classes.mainBox}>
			<Navbar totalCartItems={totalCartItems} />
			<Grid container spacing={5}>
				{products && products.length ? (
					products.map((product) => (
						<Grid item xs={12} sm={6} md={3} key={`${prefixId}-${product.id}`}>
							<CardComponent product={product} />
						</Grid>
					))
				) : (
					<h1>loading...</h1>
				)}
			</Grid>
		</Box>
	);
};

export default Home;
