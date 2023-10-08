import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import store from "./state/store.js";
import router from "./routes.js";

function App() {
	return (
		<>
			<CssBaseline />
			<Provider store={store}>
				<RouterProvider router={router} />
			</Provider>
		</>
	);
}

export default App;
