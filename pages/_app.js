import { Fragment } from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-light: #E76F51;
    --secondary-light: #2A9D8F;

    --primary-font: 'Mea Culpa';
    --secondary-font: 'Source Sans Pro';
  }

  * {
    box-sizing: border-box;
  }

  html, body {
    padding: 0;
    margin: 0;
    font-family: var(--secondary-font), -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    text-decoration: none;
  }

  .ft-primary {
    font-family: var(--primary-font);
    color: var(--primary-light);
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <GlobalStyle />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
