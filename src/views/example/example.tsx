import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useAppSelector from "../../hooks/use-app-selector.js";
import useAppDispatch from "../../hooks/use-app-dispatch.js";
import { increment } from "../../state/slices/counter.js";

function Example() {
	const value = useAppSelector((state) => state.counter.value);
	const dispatch = useAppDispatch();

	const handleIncrement = () => {
		dispatch(increment());
	};

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
			<Stack spacing={3}>
				<Typography variant="h1">Counter</Typography>
				<Typography variant="h2" textAlign="center">
					{value}
				</Typography>
				<Button onClick={handleIncrement}>Increment</Button>
			</Stack>
		</Box>
	);
}

export default Example;
