import { useContext } from "react";
import {
	Drawer,
	Box,
	Typography,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Divider,
} from "@mui/material";

import { InboxOutlined, MailOutlineOutlined } from "@mui/icons-material";
import { UIContext } from "@/context/ui";

const menuItems: string[] = ["Inbox", "Starred", "Send email", "Drafts"];

export const SideBar = () => {
	const { sidemenuOpen, closeSideMenu } = useContext(UIContext);

	return (
		<Drawer anchor="left" open={sidemenuOpen} onClose={closeSideMenu}>
			<Box sx={{ width: "250px" }}>
				<Box sx={{ padding: "5px 10px" }}>
					<Typography variant={"h4"}>Menú</Typography>
				</Box>
				<List>
					{menuItems.map((text, index) => (
						<ListItem key={index} sx={{ padding: "5px 10px" }}>
							<ListItemIcon>
								{index % 2 === 0 ? <InboxOutlined /> : <MailOutlineOutlined />}
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItem>
					))}
				</List>
				<Divider />
				<List>
					{menuItems.map((text, index) => (
						<ListItem key={index} sx={{ padding: "5px 10px" }}>
							<ListItemIcon>
								{index % 2 === 0 ? <InboxOutlined /> : <MailOutlineOutlined />}
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItem>
					))}
				</List>
			</Box>
		</Drawer>
	);
};
