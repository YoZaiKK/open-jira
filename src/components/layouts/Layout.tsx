import Head from "next/head";

import { Box } from "@mui/material";

interface Props {
	title?: string;
  children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ title='OpenJira', children }) => {
	return (
		<Box sx={{ flexFlow: 1 }}>
			<Head>
				<title>{title}</title>
			</Head>
		</Box>
	);
};
