import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		borderBottom: `3px solid ${theme.palette.primary.main}`,
		boxShadow: theme.shadows[5],
	},
	media: {
		height: 0,
		paddingTop: "56.25%", // 16:9
		// backgroundSize: "contain",
		backgroundPositionY: "bottom",
	},
	expand: {
		transform: "rotate(0deg)",
		marginLeft: "auto",
		transition: theme.transitions.create("transform", {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: "rotate(180deg)",
	},
}));

export default useStyles;
