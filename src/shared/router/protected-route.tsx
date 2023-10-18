import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAppSelector from "../../hooks/use-app-selector.js";

type Props = {
	readonly isProtected?: boolean;
	readonly redirect: string;
};

function ProtectedRoute({ isProtected = false, redirect }: Props) {
	const token = useAppSelector((state) => state.auth.token);

	return isProtected === Boolean(token) ? (
		<Outlet />
	) : (
		<Navigate to={redirect} />
	);
}

export default ProtectedRoute;
