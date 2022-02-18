import { createTheme, Theme } from "@mui/material/styles";

export const theme: Theme = createTheme({
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
