import { NavigationProvider } from "../contexts/Navigation";
import { GlobalStyle } from "../styles/GlobalStyle";
// import GlobalStyle from "@/styles/GlobalStyle";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { theme } from "@/styles/theme";
import { ThemeProvider } from "styled-components";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <NavigationProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </NavigationProvider>
    </ThemeProvider>
  );
}
