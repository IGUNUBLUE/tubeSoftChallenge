import { useEffect, useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, Grid } from "@material-ui/core";

import useStyles from "./styles";
import Navbar from "../Navbar";
import CardComponent from "../Card";
import { getProducts } from "../../store/actions";

const Home = () => {
	const navigate = useNavigate();
	const prefixId = useId();
	const dispatch = useDispatch();
	const classes = useStyles();
	const products = useSelector((state) => state.products);
	const user = useSelector((state) => state.user);
	// verify login
	useEffect(() => {
		if (!user) {
			navigate("/");
		} else {
			if (!user.email) {
				navigate("/");
			} else {
				dispatch(getProducts());
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

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
