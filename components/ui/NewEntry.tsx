import { Box, Button, TextField } from "@mui/material";
import React from "react";

import { SaveOutlined, AddCircleOutlineOutlined } from "@mui/icons-material";

export const NewEntry = () => {
	return (
		<Box sx={{ marginBottom: 2, paddingX: 2 }}>
			<Button
				variant="outlined"
				endIcon={<AddCircleOutlineOutlined />}
				fullWidth
			>
				Agregar tarea
			</Button>

			<TextField
				fullWidth
				sx={{ marginTop: 2, marginBottom: 1 }}
				placeholder="Entrada"
				autoFocus
				multiline
				label="Nueva entrada"
				helperText="Ingrese un valor"
			/>

			<Box display="flex" justifyContent="space-between">
				<Button variant="text">Cancelar</Button>
				<Button variant="outlined" color="secondary" endIcon={<SaveOutlined />}>
					Guardar
				</Button>
			</Box>
		</Box>
	);
};
