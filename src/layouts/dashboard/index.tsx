import React from "react";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Drawer from "./drawer/index.js";
import Account from "./account.js";

function Dashboard() {
	return (
		<>
			<AppBar>
				<Toolbar>
					<Drawer />
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						TITLE
					</Typography>
					<Account />
				</Toolbar>
			</AppBar>
			<Toolbar />
			<Box component="main" py={3}>
				<Outlet />
			</Box>
		</>
	);
}

export default Dashboard;
