/* eslint-disable no-restricted-syntax */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable security/detect-object-injection */
/* eslint-disable filenames/match-regex */
import React from "react"
import App, { AppInitialProps, AppContext } from "next/app"
import { ThemeProvider } from "styled-components"

import { AppTheme } from "../theme/theme"

import "../static/css/fonts.css"

class MyApp extends App {
  static async getInitialProps({
    Component,
    ctx,
  }: AppContext): Promise<AppInitialProps & any> {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render(): React.ReactElement {
    const { Component, pageProps } = this.props

    return (
      <ThemeProvider theme={AppTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
// eslint-disable-next-line import/no-default-export
export default MyApp
