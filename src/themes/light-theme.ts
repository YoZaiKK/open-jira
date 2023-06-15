"use client";
import { createTheme } from "@mui/material";
import { green, grey, red } from "@mui/material/colors";
const defaultTheme = createTheme({});
const { breakpoints } = defaultTheme;

export const lightTheme = createTheme({
  ...defaultTheme,
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
  },
  components: {
     
  },
 
})