import React from "react";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";

function Background() {
	return (
		<Box
			sx={{
				minHeight: "100vh",
				backgroundColor: "rgb(243, 246, 249)",
			}}
		>
			<Outlet />
		</Box>
	);
}

export default Background;
