import { createTheme } from "@mui/material/styles";
import { Theme } from "@mui/system";

declare module "@mui/material/styles" {
  interface Theme {
    colors: {
      raisinBlack: string;
      orangeYellow: string;
      pacificBlue: string;
      dimGrey: string;
      culturedWhite: string;
    };
    types?: {
      normal?: string;
      fire?: string;
      water?: string;
      grass?: string;
      eletric?: string;
      ice?: string;
      fighting?: string;
      poison?: string;
      ground?: string;
      psychic?: string;
      bug?: string;
      rock?: string;
      ghost?: string;
      dark?: string;
      dragon?: string;
      steel?: string;
      fairy?: string;
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
    types?: {
      normal?: string;
      fire?: string;
      water?: string;
      grass?: string;
      eletric?: string;
      ice?: string;
      fighting?: string;
      poison?: string;
      ground?: string;
      psychic?: string;
      bug?: string;
      rock?: string;
      ghost?: string;
      dark?: string;
      dragon?: string;
      steel?: string;
      fairy?: string;
    };
  }
}

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
  types: {
    normal: "#A8A878",
    fire: "#F08030",
    water: "#6890F0",
    grass: "#78C850",
    eletric: "#F8D030",
    ice: "#98D8D8",
    fighting: "#C03028",
    poison: "#A040A0",
    ground: "#E0C068",
    psychic: "#F85888",
    bug: "#A8B820",
    rock: "#B8A038",
    ghost: "#705898",
    dark: "#705848",
    dragon: "#7038F8",
    steel: "#B8B8D0",
    fairy: "#F0B6BC",
  },
});
