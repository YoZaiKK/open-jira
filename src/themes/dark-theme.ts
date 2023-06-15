"use client";

import { createTheme } from '@mui/material/styles';

const defaultTheme = createTheme({});
const { breakpoints } = defaultTheme;
import { green, grey, red } from "@mui/material/colors";



export const darkTheme = createTheme({
  ...defaultTheme,
  palette: {
    mode: 'dark', 
    primary: {
      main: '#4a148c',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      paper: "#212A3E",
      default: "#394867",
    },
    divider: "#394867",
  },
  components: {
     
  },
})