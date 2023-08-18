import { List, Paper } from "@mui/material";
import React, { FC, useMemo } from "react";
import { EntryCard } from "./EntryCard";
import { EntryStatus } from "../../interfaces";
import { useContext } from "react";
import { EntriesContext } from "../../context/entries";

interface Props {
	status: EntryStatus;
}

export const EntryList: FC<Props> = ({ status }) => {
	// console.log(status);

	const { entries } = useContext(EntriesContext);

	const enttriesByStatus = useMemo(
		() => entries.filter((entry) => entry.status === status),
		[entries]
	);

	return (
		//TO DO: Aqui haremos drop
		<div>
			<Paper
				sx={{
					height: "calc(100vh - 180px)",
					overflow: "scroll",
					backgroundColor: "transparent",
					padding: "1px 5px",
				}}
			>
				{/* To do: cambiara dependiendo si estoy haciendo drag o no */}
				<List sx={{ opacity: 1 }}>
					{enttriesByStatus.map((entry) => (
						<EntryCard key={entry._id} entry={entry} />
					))}
					{/* <EntryCard />   */}
				</List>
			</Paper>
		</div>
	);
};
