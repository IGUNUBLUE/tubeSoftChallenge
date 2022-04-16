import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	box: {
		height: "100vh",
		width: "100vw",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	paper: {
		textAlign: "center",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column",
		borderRadius: "10px",
		borderBottom: `3px solid ${theme.palette.primary.main}`,
		boxShadow: theme.shadows[7],
		padding: "40px",
		margin: "10px",
	},
	grid: {
		marginTop: "15px",
	},
	text: {
		marginBottom: "15px"
	}
}));

export default useStyles;
