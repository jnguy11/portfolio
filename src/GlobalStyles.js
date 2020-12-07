import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`


  html, body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background: black;
    height: auto;
    min-height: 768px;
  };
  h1, h2, h3, h4, h5, h6, p {
      margin: 0;
      padding: 0;
  }
  h2, h3, h4, h5, h6 {
    font-family: Dosis, sans-serif;
    font-weight: 400;
    color: #FFFFFF;
  };

  h1 {
    font-family: Dosis, sans-serif;
    font-weight: 400;
    font-size: 44px;
    color: #FFFFFF;
  };

  h2 {
      font-size: 36px;
  }

  h3 {
      font-size: 28px;
      font-weight: 400;
  }

  h4 {
    font-size: 22px;
    font-weight: 500;
  }
  
  h5 {
    font-size: 18px;
    font-weight: 400;
  };

  p {
      font-family: Exo, sans-serif;
      font-weight: 300;
      font-size: 16px;
      color: #909497;
  };

  input {
    padding-left: 1.5%;
    font-family: Exo, sans-serif;
    font-weight: 300;
    font-size: 16px;
    color: #909497;
};

  input:focus, textarea:focus, button:focus {
    outline-width: 0;
  }

  textarea {
    padding-top: 0.25em;
    padding-left: 1.5%;
    font-family: Exo, sans-serif;
    font-weight: 300;
    font-size: 16px;
    color: #909497;
  };

  a {
    font-family: Dosis, sans-serif;
    font-weight: 400;
    font-size: 18px;
    color: #5390D9;
    cursor: pointer;
  };

  button {
    font-family: Dosis, sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: #5390D9;
  }

  .NavLinkItem:hover > .linkname {
      background-position: 0 100%;
  }

  .linkname {
    position: relative;
    display: inline-block;
    color: #F7F7F7;
    overflow: hidden;
    background: linear-gradient(to right, #5390D9 50%, #F7F7F7 50%);
    background-size: 200% 100%;
    background-position: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: background-position 0.5s ease;
    text-decoration: none;
  }

  .particles {
    z-index: 100;
    height: 100%;
    width: 100%;
  }


`;

export default GlobalStyles;