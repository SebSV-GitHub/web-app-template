import React from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import useAppDispatch from "../../hooks/use-app-dispatch.js";
import { unsetToken } from "../../state/slices/auth.js";

function Account() {
	const dispatch = useAppDispatch();
	const [isOpen, setIsOpen] = React.useState(false);
	const [anchorElement, setAnchorElement] = React.useState<
		undefined | HTMLElement
	>(undefined);

	const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElement(event.currentTarget);
		setIsOpen(true);
	};

	const handleClose = () => {
		setIsOpen(false);
	};

	const handleLogout = () => {
		dispatch(unsetToken());
		handleClose();
	};

	return (
		<>
			<Tooltip title="Account">
				<IconButton onClick={handleOpen}>
					<Avatar />
				</IconButton>
			</Tooltip>
			<Menu open={isOpen} anchorEl={anchorElement} onClose={handleClose}>
				<MenuItem onClick={handleLogout}>Logout</MenuItem>
			</Menu>
		</>
	);
}

export default Account;
