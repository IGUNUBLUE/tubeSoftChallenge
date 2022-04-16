import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "@material-ui/core";

import { store, persister } from "../../store";
import useGlobalStyles from "../../theme/globalStyles";
import theme from "../../theme";
import Login from "../Login";
import Home from "../Home";

function App() {
	useGlobalStyles();

	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persister}>
				<ThemeProvider theme={theme}>
					<BrowserRouter>
						<Routes>
							<Route path="/" element={<Login />} />
							<Route path="/home" element={<Home />} />
						</Routes>
					</BrowserRouter>
				</ThemeProvider>
			</PersistGate>
		</Provider>
	);
}

export default App;
