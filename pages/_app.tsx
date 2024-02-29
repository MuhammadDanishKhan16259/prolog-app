import { NavigationProvider } from "../contexts/Navigation";
import { GlobalStyle } from "../styles/GlobalStyle";
// import GlobalStyle from "@/styles/GlobalStyle";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NavigationProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </NavigationProvider>
  );
}
