import { ThemeProvider } from "@material-ui/core";

import useGlobalStyles from "../../theme/globalStyles";
import theme from "../../theme";
import Home from "../Home";

function App() {
	useGlobalStyles();
	
	return (
		<ThemeProvider theme={theme}>
			<Home  />
		</ThemeProvider>
	);
}

export default App;
