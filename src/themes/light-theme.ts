"use client";
import { createTheme } from "@mui/material";
import { green, grey, red } from "@mui/material/colors";



export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: green[900],
      paper: green[900],
    }, 
    primary: {
      main: '#4a148c',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },



  }
})