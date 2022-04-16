import { useEffect, useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Grid } from "@material-ui/core";

import useStyles from "./styles";
import Navbar from "../Navbar";
import CardComponent from "../Card";
import { getProducts } from "../../store/actions";

const Home = () => {
	const prefixId = useId();
	const dispatch = useDispatch();
	const classes = useStyles();
	const products = useSelector((state) => state.products);

	useEffect(() => {
		dispatch(getProducts());
	}, [dispatch]);

	return (
		<Box className={classes.mainBox}>
			<Navbar />
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
