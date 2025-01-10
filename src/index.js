import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --white: #ffff;
    --black: #0000;
    /*brown-group*/
    --dark-brown: #4E3B31;
    --light-brown: #D7B48D;
    /*green-group*/
    --mint-green: #A3D9C9;
    --dark-green: #3A5B32;
    /*beige-group*/
    --dark-beige: #D6CDAF;
    --light-beige: #EAE3C2;
    /*red-group*/
    --earthy-red: #8B3A3A;
    /*grey-group*/
    --light-grey: #F6F6F6;
    --medium-grey: #A9A9A9
  }

  body {
    margin: 0;
    font-family: "Poppins", serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  ul,li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
