"use client";
import Head from "next/head";

import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme } from "@/themes";
import { Navbar } from "../ui";

interface Props {
	title?: string;
	children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ title = "Open-Jira", children }) => {
	return (
		<>
			{/* Navbar */} 

			{/* Sidebar */}

			<Box sx={{ padding: "20px 10px" }}>
				{/* <ThemeProvider theme={darkTheme}>
					<CssBaseline /> */}
					<body>{children}</body>
				{/* </ThemeProvider> */}
			</Box>
		</>
	);
};
