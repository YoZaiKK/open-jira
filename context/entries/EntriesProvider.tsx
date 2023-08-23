import { FC, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

import { Entry } from "../../interfaces";

import { EntriesContext, entriesReducer } from "./";

export interface EntriesState {
	entries: Entry[];
}

const ENTRIES_INITIAL_STATE: EntriesState = {
	entries: [
		{
			_id: uuidv4(),
			description: "Pendiente: Seleccionar el color de la app",
			status: "pending",
			createdAt: Date.now(),
		},
		{
			_id: uuidv4(),
			description: "In-progress: Seleccionar el color de la app",
			status: "in-progress",
			createdAt: Date.now() - 1000000,
		},
		{
			_id: uuidv4(),
			description: "Finished: Seleccionar el color de la app",
			status: "finished",
			createdAt: Date.now() - 100000,
		},
	],
};

export const EntriesProvider: FC = ({ children }) => {
	const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);

	const addNewEntry = (description: string) => {
		const newEntry: Entry = {
			_id: uuidv4(),
			description,
			createdAt: Date.now(),
			status: "pending",
		};

		dispatch({ type: "[Entry] - Add-Entry", payload: newEntry });
	};

	return (
		<EntriesContext.Provider
			value={{
				...state,
				//Methods
				addNewEntry,
			}}
		>
			{children}
		</EntriesContext.Provider>
	);
};
