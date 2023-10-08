import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Provider } from "react-redux";
import store from "./state/store.js";
import Example from "./views/example/example.js";

function App() {
	return (
		<>
			<CssBaseline />
			<Provider store={store}>
				<Example />
			</Provider>
		</>
	);
}

export default App;
