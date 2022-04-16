import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import useStyles from "./styles";
import { sigIn } from "../../store/actions";

import {
	Grid,
	TextField,
	Paper,
	Button,
	Box,
	Typography,
} from "@material-ui/core";

const Login = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const classes = useStyles();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (email !== "" && password !== "") {
			return dispatch(sigIn(email, password, navigate, "/home"));
		}

		return setError(true);
	};

	const handelEmailChange = (e) => setEmail(e.target.value);
	const handlePasswordChange = (e) => setPassword(e.target.value);

	return (
		<Box className={classes.box}>
			<Paper className={classes.paper}>
				<Typography variant="h4" className={classes.text}>
					Welcome to tubesoft Store!
				</Typography>
				<form noValidate autoComplete="off" onSubmit={handleSubmit}>
					<Grid container spacing={5} className={classes.grid}>
						<Grid item xs={12} sm={12} md={12}>
							<TextField
								error={error}
								helperText={error ? "Please verify your email" : ""}
								fullWidth
								required
								id="email-required"
								label="Email"
								defaultValue={email}
								variant="outlined"
								onChange={handelEmailChange}
								type="email"
							/>
						</Grid>
						<Grid item xs={12} sm={12} md={12}>
							<TextField
								error={error}
								helperText={error ? "Password is required" : ""}
								fullWidth
								required
								id="password-required"
								label="Password"
								defaultValue={password}
								variant="outlined"
								onChange={handlePasswordChange}
								type="password"
							/>
						</Grid>
						<Grid item xs={12} sm={12} md={12}>
							<Button
								variant="contained"
								color="primary"
								fullWidth
								type="submit"
							>
								Sign in
							</Button>
						</Grid>
					</Grid>
				</form>
			</Paper>
		</Box>
	);
};

export default Login;
