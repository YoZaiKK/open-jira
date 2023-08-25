import {
	Card,
	CardContent,
	CardActionArea,
	Typography,
	CardActions,
} from "@mui/material";
import { DragEvent, FC, useContext } from "react";
import { Entry } from "../../interfaces/";
import { UIContext } from "../../context/ui";

interface Props {
	entry: Entry;
}

export const EntryCard: FC<Props> = ({ entry }) => {

	const {startDragging, endDragging} = useContext(UIContext)

	const onDragStart = (e: DragEvent) => { 
		e.dataTransfer?.setData("text", entry._id);
		// modificar el estado para indicar que estoy haciendo drag
		startDragging()
	};

	const onDragEnd = (e: DragEvent) => { 
		// modificar el estado para indicar que ya no estoy haciendo drag
		endDragging()
	};

	return (
		<Card
			sx={{ marginBottom: 1 }}
			//Eventos al dragear
			draggable
			onDragStart={onDragStart}
			onDragEnd={onDragEnd}
		>
			<CardActionArea>
				<CardContent>
					<Typography sx={{ whiteSpace: "pre-line" }}>
						{entry.description}
					</Typography>
				</CardContent>
				<CardActions
					sx={{ display: "flex", justifyContent: "end", paddingRight: 2 }}
				>
					<Typography variant="body2">Hace 30 minutos </Typography>
				</CardActions>
			</CardActionArea>
		</Card>
	);
};
