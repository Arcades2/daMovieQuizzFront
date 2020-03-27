import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Roboto';
  }
  body {
    overflow-x: hidden;
  }
  a {
    text-decoration: none;
  }
  .container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 768px) {
    width: 750px;
  }
  @media (min-width: 992px) {
    width: 970px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
}
`;

const StyledMainContent = styled.div`
  padding-top: 25px;
`;

export { GlobalStyle, StyledMainContent };
