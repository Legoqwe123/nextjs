import { normalize } from "styled-normalize"
import { createGlobalStyle } from "styled-components"
import get from "lodash/get"

import { colors } from "./colors"
import { textStyles } from "./text-styles"
import { borders } from "./borders"

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  body {
    font-size: 16px;
    font-family: 'Myriad Pro, sans-serif';
    font-weight: normal;
    touch-action: manipulation;
    -webkit-overflow-scrolling: touch;
  }
`

export const AppTheme = {
  breakpoints: ["40em", "52em", "58em", "64em", "76em", "86em"],
  space: [0, 4, 8, 16, 24, 32, 48, 64, 128, 256, 512, 716],
  fontSizes: [12, 14, 16, 18, 20, 24, 36, 48, 80, 96],
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  lineHeights: {
    solid: 1,
    text: 1.15,
    title: 1.25,
    copy: 1.5,
    double: 2,
  },
  letterSpacings: {
    normal: "normal",
    tracked: "0.1em",
    tight: "-0.05em",
    mega: "0.25em",
  },
  fonts: {
    weblySleekUI: "Myriad Pro, sans-serif",
  },
  sizes: [16, 32, 64, 80, 128, 256, 512],
  radii: [0, 2, 4, 7, 16, 9999, "50%", "100%"],
  width: [16, 32, 64, 80, 128, 256, 512],
  heights: [16, 32, 64, 80, 128, 256, 512],
  maxWidths: [16, 32, 64, 128, 256, 512, 768, 1024, 1440, 1536],
  zIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],

  colors,
  borders,
  textStyles,
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const theme = (path: string): any => get(AppTheme, path, null)
