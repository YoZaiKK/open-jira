import { Box, Button, TextField } from "@mui/material";
import { useState, ChangeEvent } from "react";

import { SaveOutlined, AddCircleOutlineOutlined } from "@mui/icons-material";

export const NewEntry = () => {
	const [isAdding, setIsAdding] = useState(false);
	const [inputValue, setInputValue] = useState("");
	const [touched, setTouched] = useState(false);

	const onTextFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
		setTouched(true);
	};

	const onSave = () => {
		if (inputValue === "") { 
			return;
		} 
		console.log({inputValue});
	}

	return (
		<Box sx={{ marginBottom: 2, paddingX: 2 }}>
			{isAdding ? (
				<>
					<TextField
						fullWidth
						sx={{ marginTop: 2, marginBottom: 1 }}
						placeholder="Entrada"
						autoFocus
						multiline
						label="Nueva entrada"
						helperText={touched && inputValue === "" && "Ingrese un valor"}
						error={touched && inputValue === ""}
						value={inputValue}
						onChange={onTextFieldChange}
						onBlur={() => {
							setTouched(true);
						}}
					/>

					<Box display="flex" justifyContent="space-between">
						<Button variant="text" onClick={() => setIsAdding(false)}>
							Cancelar
						</Button>
						<Button
							variant="outlined"
							color="secondary"
							endIcon={<SaveOutlined />}
							onClick={onSave}
						>
							Guardar
						</Button>
					</Box>
				</>
			) : (
				<>
					<Button
						variant="outlined"
						endIcon={<AddCircleOutlineOutlined />}
						fullWidth
						onClick={() => setIsAdding(true)}
					>
						Agregar tarea
					</Button>
				</>
			)}
		</Box>
	);
};
