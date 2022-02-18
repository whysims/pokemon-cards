import "@mui/material/styles";
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
  // allow configuration using `createTheme`
  interface ThemeOptions {
    colors: {
      raisinBlack: string;
      orangeYellow: string;
      pacificBlue: string;
      dimGrey: string;
      culturedWhite: string;
    };
  }
}
