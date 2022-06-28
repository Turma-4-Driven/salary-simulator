import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;

    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    font-family: 'Roboto', sans-serif;
    font-style: normal;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  body {
    background-color: #202020;
  }

  html {
    font-family: 'Roboto', sans-serif;
  }

  button {
    font-family: 'Roboto', sans-serif;
    font-style: normal;

    border-width: 0px;
    border-radius: 4px;

    //opacity: ${p => p.isDisable ? 0.7 : 1};
    //cursor: ${p => p.isDisable ? 'wait' : 'pointer'};
    :hover {
      filter: brightness(90%);
    }
  }

  input {   
    font-family: 'Roboto', sans-serif;
    font-style: normal;

    //background-color: ${p => p.isDisable ? '#F2F2F2' : '#FFFFFF'};
    //pointer-events: ${p => p.isDisable ? 'wait' : 'all'};

    ::placeholder {
      color: white;
    }
    :focus {
      color: white;
      outline: none;
    }
  }

  a {
    text-decoration: none;
    * {
      :hover {
        color: #1877F2;
      }
    }
  }
`;

export default GlobalStyle;
