import { createTheme } from "@mui/material";

export function customTheme({
  mode,
  isRTL,
}: {
  mode: "light" | "dark";
  isRTL: boolean;
}) {
  return createTheme({
    direction: isRTL ? "rtl" : "ltr",
    palette: {
      yellow: {
        100: "#FFFBDA",
        200: "#FFEC9E",
      },
      success: {
        main: "#1C8A66",
      },
    },
    typography: {
      fontFamily: "inherit",
      fontSize: 16,
    },
  });
}
