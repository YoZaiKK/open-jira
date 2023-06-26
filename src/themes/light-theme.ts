"use client";
import { createTheme } from "@mui/material";
import { green, grey, red } from "@mui/material/colors";
const defaultTheme = createTheme({});
const { breakpoints } = defaultTheme;

export const lightTheme = createTheme({
  ...defaultTheme,
  palette: {
    mode: "light",
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
    }
  },

})