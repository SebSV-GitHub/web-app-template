import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Background from "./layouts/background.js";
import Dashboard from "./layouts/dashboard/index.js";
import NotFound from "./views/not-found/index.js";
import Example from "./views/example/index.js";
import Login from "./views/login/index.js";

const router = createBrowserRouter([
	{
		element: <Background />,
		errorElement: <NotFound />,
		children: [
			{
				path: "/",
				element: <Dashboard />,
				children: [
					{
						index: true,
						element: <Example />,
					},
				],
			},
			{
				path: "/login",
				element: <Login />,
			},
		],
	},
]);

export default router;
