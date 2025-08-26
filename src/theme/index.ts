import { createTheme } from "@mui/material";

export const getTheme = (mode: "light" | "dark") => {
  return createTheme({
    palette: {
      mode,
      primary: {
        main: "#E55518",
        contrastText: "#000000",
      },
      secondary: {
        main: "#C9DFDC",
        contrastText: "#000000",
      },
      info: {
        main: "#000000",
        contrastText: "#FFFFFF",
      },
      background: {
        default: mode === "light" ? "#EBEBEB" : "#171717",
      },
      text: {
        secondary: "#909090",
      },
    },
    typography: {
      fontFamily: "Orbit",
      fontWeightLight: 200,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            fontSize: "clamp(0.8rem, 2vw, 1rem)",
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            fontWeight: 400,
            fontSize: "clamp(0.8rem, 2vw, 1rem)",
            letterSpacing: "0.11em",
            lineHeight: "26px",
          },
        },
        variants: [
          {
            props: { variant: "h1" },
            style: {
              fontWeight: 400,
              fontFamily: "Audiowide",
              fontSize: "clamp(2rem, 4vw, 4rem)",
              letterSpacing: "0.05em",
              lineHeight: "26px",
              span: { color: "#E55518" },
            },
          },
          {
            props: { variant: "h2" },
            style: {
              fontWeight: 400,
              fontFamily: "Audiowide",
              fontSize: "clamp(1.3rem, 4vw, 2.8rem)",
              letterSpacing: "0.05em",
              lineHeight: "20px",
              span: { color: "#E55518" },
            },
          },
        ],
      },
    },
  });
};
