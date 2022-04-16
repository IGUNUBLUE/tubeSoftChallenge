import { Box, Grid } from "@material-ui/core";

import useStyles from "./styles";
import Navbar from "../Navbar";
import Card from "../Card"

const Home = () => {
	const classes = useStyles();
	return (
		<Box className={classes.mainBox}>
			<Navbar />
			<Grid container spacing={5}>
				<Grid item xs={12} sm={6} md={3} ><Card /></Grid>
				<Grid item xs={12} sm={6} md={3}><Card /></Grid>
				<Grid item xs={12} sm={6} md={3}><Card /></Grid>
				<Grid item xs={12} sm={6} md={3}><Card /></Grid>
			</Grid>
		</Box>
	);
};

export default Home;
