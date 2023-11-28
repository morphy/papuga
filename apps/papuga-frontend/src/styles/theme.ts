import { createTheme } from "@mui/material";

let theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained"
      }
    }
  }
});

theme = createTheme(theme, {
  palette: {
    primary: theme.palette.augmentColor({
      color: {
        main: "#b71c1c"
      }
    }),

    secondary: theme.palette.augmentColor({
      color: {
        main: "#1cb7b7"
      }
    })
  }
});

export default theme;
