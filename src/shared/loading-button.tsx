import React from "react";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import type { ButtonProps } from "@mui/material/Button";

type Props = {
	readonly isLoading?: boolean;
};

// Size should not be hardcoded
function LoadingButton({
	isLoading = false,
	children,
	disabled,
	...props
}: ButtonProps & Props) {
	return (
		<Button disabled={isLoading || disabled} {...props}>
			{isLoading ? <CircularProgress color="inherit" size={24} /> : children}
		</Button>
	);
}

export default LoadingButton;
