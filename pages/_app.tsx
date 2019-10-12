import React from "react";

import App from "next/app";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import theme from "../src/frontend/common/theme";
import Wrapper from "../src/frontend/common/Wrapper";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Wrapper>
            <Component {...pageProps} />
          </Wrapper>
        </ThemeProvider>
      </>
    );
  }
}

export default MyApp;
