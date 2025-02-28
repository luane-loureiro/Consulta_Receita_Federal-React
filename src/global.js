import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  *, body {
  margin: 0;
  padding: 0;
  border: none;
  box-sizing: border-box;
  vertical-align: baseline;
  list-style: none;
  font-size: 1rem;
  font-weight: 400;
  }
`;

 
export default GlobalStyle;