import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Example() {
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
			<Typography variant="h1">Example view</Typography>
		</Box>
	);
}

export default Example;
