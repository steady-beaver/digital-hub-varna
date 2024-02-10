import { createTheme } from "@material-ui/core/styles";
import theme from "./theme";

const muiTheme = createTheme({
  palette: {
    primary: {
      main: theme.colors.green.dark,
    },
  },
  typography: {
    fontFamily: "Lexend, sans-serif",
  },
});

export default muiTheme;
