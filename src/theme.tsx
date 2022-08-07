import { extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"

const fonts = {
  heading: "'Noto Serif JP', 'sans-serif'",
  body: "'Noto Serif JP', 'sans-serif'",
  mono: `'Menlo', monospace`
}

const fontSizes = {
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "3xl": "1.875rem",
  "4xl": "2.25rem",
  "5xl": "3rem",
  "6xl": "3.75rem",
  "7xl": "4.5rem",
  "8xl": "6rem",
  "9xl": "8rem"
}

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em"
})

const theme = extendTheme({
  semanticTokens: {
    colors: {
      text: {
        default: "#16161D",
        _dark: "#ade3b8"
      },
      heroGradientStart: {
        default: "#7928CA",
        _dark: "#e3a7f9"
      },
      heroGradientEnd: {
        default: "#FF0080",
        _dark: "#fbec8f"
      }
    },
    radii: {
      button: "12px"
    }
  },
  colors: {
    black: "#16161D"
  },
  fonts,
  breakpoints
})

export default theme
