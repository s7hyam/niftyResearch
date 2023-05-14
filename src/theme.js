// import { Poppins } from "next/font/google";
import { createTheme } from "@mui/material/styles";

// export const poppins = Poppins({
//   weight: ["300", "400", "500", "600", "700"],
//   subsets: ["latin"],
//   display: "swap",
//   fallback: ["Helvetica", "Arial", "sans-serif"],
// });

export const poppins = ["Poppins", "sans-serif", "Helvetica", "Arial"].join(
  ","
);

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      500: "#00FF88",
      main: "#00FF88",
    },
    white: {
      main: "#FFFFFF",
      500: "#FFFFFF",
      200: "rgba(255, 255, 255, 0.75)",
    },
    black: {
      main: "#1A1A1A",
      500: "#1A1A1A",
      200: "#212121",
    },
  },
  typography: {
    fontFamily: poppins,
  },
});

export default theme;

const commonTheme = {
  palette: {
    primary: {
      500: "#00FF88",
      main: "#00FF88",
    },
    white: {
      main: "#FFFFFF",
      500: "#FFFFFF",
      200: "rgba(255, 255, 255, 0.75)",
    },
    black: {
      main: "#1A1A1A",
      500: "#1A1A1A",
      200: "#212121",
    },
  },
  typography: {
    fontFamily: poppins,
  },
};

export const darkTheme = createTheme({
  ...commonTheme,
  palette: {
    mode: "dark",
    primary: {
      500: "#00FF88",
      main: "#00FF88",
    },
    white: {
      main: "#FFFFFF",
      500: "#FFFFFF",
      200: "rgba(255, 255, 255, 0.75)",
    },
    black: {
      main: "#1A1A1A",
      500: "#1A1A1A",
      200: "#212121",
    },
    background: {
      default:
        "linear-gradient(110.758deg, #050A15 29.06%, #000925 58.81%, #010306 96.44%)",
      secondary: "#1B1B1B",
    },

    gradient: {
      main: "linear-gradient(110.758deg, #050A15 29.06%, #000925 58.81%, #010306 96.44%)",
    },
    shadows: {
      btn: "-6px -6px 12px rgba(0, 0, 0, 0.25), 6px 6px 12px rgba(0, 0, 0, 0.25), inset -6px -6px 12px rgba(0, 0, 0, 0.25), inset 6px 6px 12px rgba(0, 0, 0, 0.25)",
    },
  },
});

export const lightTheme = createTheme({
  ...commonTheme,
  palette: {
    mode: "light",
    primary: {
      500: "#00FF88",
      main: "#00FF88",
    },
    white: {
      main: "#FFFFFF",
      500: "#FFFFFF",
      200: "rgba(255, 255, 255, 0.75)",
    },
    black: {
      main: "#1A1A1A",
      500: "#1A1A1A",
      200: "#212121",
    },
    btn: "#FAFAFA",
    background: {
      default: "linear-gradient(112.38deg,#fff 18.06%,#e1e1fc 98.3%)",
      paper: "#fff",
      secondary: "#D5E9F0",
    },
    secondary: {
      main: "#19857b",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.5)",
    },
    gradient: {
      main: "linear-gradient(112.38deg,#fff 18.06%,#e1e1fc 98.3%)",
    },
    shadows: {
      btn: "",
    },
  },
});
console.log({ lightTheme, darkTheme });
