import { Layout } from "@components/Layout";
import { GlobalStyle } from "@styles/global";
import { darkTheme, lightTheme } from "@styles/global/theme";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { FavoritesProvider } from "../context/FavoritesContext";
import Router from "next/router";
import { useState, useEffect } from "react";
import { Loader } from "@components/Loader";

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState("light");

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    Router.events.on("routeChangeStart", (url) => {
      setIsLoading(true);
      document.body.style.overflow = "hidden";
    });

    Router.events.on("routeChangeComplete", (url) => {
      setIsLoading(false);
      document.body.style.overflow = "unset";
    });

    Router.events.on("routeChangeError", (url) => {
      setIsLoading(false);
      document.body.style.overflow = "unset";
    });
  }, [Router]);

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <>
      {isLoading && <Loader />}
      <Head>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyle />
        <FavoritesProvider>
          <Layout theme={theme} toggleTheme={() => toggleTheme()}>
            <Component {...pageProps} />
          </Layout>
        </FavoritesProvider>
      </ThemeProvider>
    </>
  );
}
