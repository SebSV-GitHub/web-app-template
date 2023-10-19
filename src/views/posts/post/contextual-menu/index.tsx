import React from "react";
import IconButton from "@mui/material/IconButton";
import MoreIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import DeleteDialog from "./delete-dialog.js";

function ContextualMenu() {
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
			<IconButton onClick={handleOpen}>
				<MoreIcon />
			</IconButton>
			<Menu open={isOpen} anchorEl={anchorElement} onClose={handleClose}>
				<DeleteDialog />
			</Menu>
		</>
	);
}

export default ContextualMenu;
