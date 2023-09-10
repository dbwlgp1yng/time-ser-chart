import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  button {
    border: none;
    background-color: transparent;
  }
`;

export default GlobalStyle;
