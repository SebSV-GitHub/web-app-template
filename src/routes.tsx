import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Background from "./layouts/background.js";
import Dashboard from "./layouts/dashboard/index.js";
import NotFound from "./views/not-found/index.js";
import Example from "./views/example/index.js";
import Login from "./views/login/index.js";
import ProtectedRoute from "./shared/router/protected-route.js";

const router = createBrowserRouter([
	{
		element: <Background />,
		errorElement: <NotFound />,
		children: [
			{
				element: <ProtectedRoute isProtected redirect="/login" />,
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
				],
			},
			{
				element: <ProtectedRoute redirect="/" />,
				children: [
					{
						path: "/login",
						element: <Login />,
					},
				],
			},
		],
	},
]);

export default router;
