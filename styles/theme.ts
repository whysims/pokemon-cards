import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    colors: {
      raisinBlack: string;
      orangeYellow: string;
      pacificBlue: string;
      dimGrey: string;
      culturedWhite: string;
    };
  }

  interface ThemeOptions {
    colors?: {
      raisinBlack?: string;
      orangeYellow?: string;
      pacificBlue?: string;
      dimGrey?: string;
      culturedWhite?: string;
    };
  }
}

export const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0,
          fontFamily: "Poppins",
        },
      },
    },
  },
  colors: {
    raisinBlack: "#272727",
    orangeYellow: "#FED766",
    pacificBlue: "#009FB7",
    dimGrey: "#696773",
    culturedWhite: "#EFF1F3",
  },
});
