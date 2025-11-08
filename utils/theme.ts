import { brand } from '@/components/colors/brand'
import { createTheme, ThemeOptions } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    primary: {
      main: brand.primary,
      contrastText: '#fff',
    },

    white: {
      main: '#fff',
      contrastText: brand.blue,
    },

    dark: {
      main: brand.gray900,
      contrastText: '#fff',
    },

    darkWhite: {
      main: brand.gray900,
      contrastText: '#fff',
    },

    blue: {
      main: brand.blue,
      contrastText: '#fff',
    },

    info: {
      main: brand.blue,
      contrastText: '#fff',
    },

    cpPrimary: {
      main: brand.blue,
      contrastText: '#fff',
    },
  },

  typography: {
    fontFamily: 'Inter, sans-serif',
    htmlFontSize: 18,
  },

  // CUSTOM THEME COMPONENTS
} as ThemeOptions)

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    filledTonal: true
    outlinedTonal: true
  }

  interface ButtonPropsColorOverrides {
    white: true
    dark: true
    darkWhite: true
    blue: true
    cpPrimary: true
  }
}

declare module '@mui/material/IconButton' {
  interface IconButtonPropsColorOverrides {
    white: true
    cpPrimary: true
  }
}

declare module '@mui/material/Chip' {
  interface ChipPropsVariantOverrides {
    filledTonal: true
  }
}
