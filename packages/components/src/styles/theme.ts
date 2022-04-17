import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    muted: Palette["primary"];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    muted?: PaletteOptions["primary"];
  }
  interface PaletteColor {
    mainGradient?: string;
    red?: string;
    selected?: string;
    reserved?: string;
    lightYellow?: string;
  }
  interface SimplePaletteColorOptions {
    mainGradient?: string;
    selected?: string;
    reserved?: string;
    red?: string;
    lightYellow?: string;
  }

  interface BreakpointOverrides {
    xxl: true;
    xxs: true;
  }
}

declare module "@mui/material/TextField" {
  interface TextFieldPropsColorOverrides {
    muted: true;
  }
}

declare module "@mui/material/IconButton" {
  interface IconButtonPropsColorOverrides {
    muted: true;
  }
}

// A custom theme for this app
const custom_theme = createTheme({
  palette: {
    common: {
      black: "#2b2b2b",
      white: "#fff",
    },
    primary: {
      light: "#f8e401",
      main: "#E45415 ",
      dark: "#c54646",
      selected: "#0FC521",
      reserved: "#F39065",
      mainGradient:
        "transparent linear-gradient(97deg, #e45415 0%, #E9741A 59%, #F9DE2A 100%) 0% 0% no-repeat padding-box",
    },

    secondary: {
      light: "#f8e40159",
      main: "#BDFBCE",
      red: "rgb(248 228 1 / 8%)",
      lightYellow: "rgb(248 228 1 / 8%)",
    },
    success: {
      main: "#4bc313",
    },
    error: {
      main: "#E45415",
    },
    muted: {
      light: "#efefef",
      main: "#979797",
      dark: "#000",
    },

    grey: {
      300: "#DCDCDC",
      400: "#C8C8C8",
      500: "#E3E3E3",
      700: "#8F8F8F",
    },

    text: {
      primary: "#2B2B2B",
      secondary: "#A4A4A4",
    },
    action: {
      active: "#E45415",
      hover: "#F3EBEB",
      selected: "#E45415",
    },
  },
  breakpoints: {
    values: {
      xxs: 0,
      xs: 320,
      sm: 480,
      md: 768,
      lg: 1024,
      xl: 1200,
      xxl: 1400,
    },
  },
  typography: {
    fontFamily: ["Nexa", "sans-serif"].join(","),
    fontSize: 12,
    fontWeightRegular: 500,
    fontWeightMedium: 500,
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderColor: "#E3E3E3 !important",
          borderWidth: "1px!important",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: "10px !important",
        },
      },
    },
    MuiButtonBase: { defaultProps: { disableRipple: true } },
    MuiCheckbox: { defaultProps: { disableRipple: true } },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          position: "relative",
        },
      },
    },
  },
});

export default custom_theme;
