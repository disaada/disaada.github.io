import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    line-height: 1.6;
    font-size: 18px;
    height: 100vh;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
  }

  a {
    color: black;
    text-decoration: none;
    background-position-y: -0%;
    background-image: linear-gradient( ${({ theme }) => theme.background} 50%, #de667a 50%);
    transition: background 500ms ease;
    background-size: auto 190%;
  }
  
  a:hover {
    color: #ffffff;
    background-position-y: 100%;
  }
  
  img {
    max-width: 100%;
    display: block;
  }
  
  h2, h4, h3 {
    color: #de667a;
    display: inline;
    margin-right: 10px;
    text-decoration: none;
  }

  b, a {
    color: #de667a;
    text-decoration: none;
  }
  
  h2, h4, h3 {
    cursor: pointer;
  }

  h1 {
    color: ${({ theme }) => theme.text};
  }

  ul li {
    color: ${({ theme }) => theme.text};
  }

  ul li a {
    color: #de667a;
    text-decoration: none;
    cursor: pointer;
  }
  `;
