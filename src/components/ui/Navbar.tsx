import { useContext } from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { MenuOutlined } from "@mui/icons-material";
import { UIContext } from "@/context/ui";

export const Navbar = () => {
	const { openSideMenu } = useContext(UIContext);
	return (
		<AppBar position="sticky">
			<Toolbar>
				<IconButton edge="start" size="large" onClick={openSideMenu}>
					<MenuOutlined />
				</IconButton>
				<Typography variant={"h6"}>OpenJira</Typography>
			</Toolbar>
		</AppBar>
	);
};

// Excellent communication skills with both technical and non-technical audiences
