import "@mui/material/styles/createPalette";

type YellowPalette = {
  100: string;
  200: string;
};
declare module "@mui/material/styles/createPalette" {
  interface Palette {
    yellow: PaletteColor;
  }

  interface PaletteColor {
    100: string;
    200: string;
  }

  interface PaletteOptions {
    yellow?: PaletteColorOptions;
  }

  interface SimplePaletteColorOptions {
    100?: string;
    200?: string;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    yellow: true;
  }
}
