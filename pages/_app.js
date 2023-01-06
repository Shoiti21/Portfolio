import Head from "next/head";
import React from "react";
import { ThemeProvider } from "styled-components";
import NavTabs from "../src/components/NavTabs";
import Footer from "../src/components/Footer";
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
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  );
};

export default MyApp;
