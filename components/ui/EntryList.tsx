import React, { DragEvent, FC, useMemo, useContext } from "react";

import { List, Paper } from "@mui/material";

import { EntriesContext } from "../../context/entries";
import { UIContext } from "../../context/ui";

import { EntryStatus } from "../../interfaces";
import { EntryCard } from "./";

import styles from "./EntryList.module.css";

interface Props {
	status: EntryStatus;
}

export const EntryList: FC<Props> = ({ status }) => {
	// console.log(status);

	const { entries, updateEntry } = useContext(EntriesContext);

	const { isDragging, endDragging } = useContext(UIContext);

	const enttriesByStatus = useMemo(
		() => entries.filter((entry) => entry.status === status),
		[entries]
	);

	const onDropEntry = (e: DragEvent<HTMLDivElement>) => {
		// console.log(e);
		const id = e.dataTransfer?.getData("text");

		//TO DO: Aqui haremos drop

		const entry = entries.find((entry) => entry._id === id)!;
		entry.status = status;
		updateEntry(entry);
		endDragging();
	};

	const allowDrop = (e: DragEvent<HTMLDivElement>) => {
		e.preventDefault();
	};

	return (
		//TO DO: Aqui haremos drop 
		<div
			onDrop={onDropEntry}
			onDragOver={allowDrop}
			className={isDragging ? styles.dragging : ""}
		>
			<Paper
				sx={{
					height: "calc(100vh - 180px)",
					overflow: "auto",
					backgroundColor: "transparent",
					padding: "1px 5px",
				}}
			>
				{/* To do: cambiara dependiendo si estoy haciendo drag o no */}
				<List sx={{ opacity: isDragging ? 0.2 : 1, transition: "all .3s" }}>
					{enttriesByStatus.map((entry) => (
						<EntryCard key={entry._id} entry={entry} />
					))}
					{/* <EntryCard />   */}
				</List>
			</Paper>
		</div>
	);
};
