import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function NotFound() {
	return (
		<Box
			sx={{
				minHeight: "100vh",
				backgroundColor: "rgb(243, 246, 249)",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Typography variant="h2">404 Not found :(</Typography>
		</Box>
	);
}

export default NotFound;
