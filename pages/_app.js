import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/globalStyles";
import { lightTheme, darkTheme } from "../components/theme";
import Layout from "../components/layout/";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Layout toggleEffect={themeToggler} theme={theme} >
        <Component theme={theme} {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
