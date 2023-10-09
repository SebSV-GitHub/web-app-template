import React from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

function Account() {
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

	return (
		<>
			<Tooltip title="Account">
				<IconButton onClick={handleOpen}>
					<Avatar />
				</IconButton>
			</Tooltip>
			<Menu open={isOpen} anchorEl={anchorElement} onClose={handleClose}>
				<MenuItem onClick={handleClose}>Option</MenuItem>
			</Menu>
		</>
	);
}

export default Account;
