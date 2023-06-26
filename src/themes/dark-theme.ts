import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const defaultTheme = createTheme({});
const { breakpoints } = defaultTheme;

export const darkTheme = createTheme({
  ...defaultTheme,
  palette: {
    mode: "dark",
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundColor: "#4a148c",
        },
      },
    },
  },
});
