import React from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AbcIcon from "@mui/icons-material/Abc";

function Drawer() {
	const [isOpen, setIsOpen] = React.useState(false);

	const handleOpen = () => {
		setIsOpen(true);
	};

	const handleClose = () => {
		setIsOpen(false);
	};

	return (
		<>
			<IconButton
				edge="start"
				size="large"
				color="inherit"
				onClick={handleOpen}
			>
				<MenuIcon />
			</IconButton>
			<MuiDrawer open={isOpen} anchor="left" onClose={handleClose}>
				<List>
					<ListItem disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<AbcIcon />
							</ListItemIcon>
							<ListItemText primary="Option 1" />
						</ListItemButton>
					</ListItem>
				</List>
			</MuiDrawer>
		</>
	);
}

export default Drawer;
