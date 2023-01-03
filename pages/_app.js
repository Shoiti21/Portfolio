import Head from "next/head";
import React from "react";
import { ThemeProvider } from "styled-components";
import NavTabs from "../src/components/NavTabs";
import { GlobalStyle, theme } from "../src/styles";

const MyApp = ({ Component, pageProps }) => {
  return (
    <React.Fragment>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>{`Portfolio do Shoiti`}</title>
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <NavTabs />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
};

export default MyApp;
