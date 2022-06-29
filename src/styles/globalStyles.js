import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, 
  *::before, 
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    min-height: 100vh;
    font-family: 'Nunito Sans', sans-serif;
    color: ${({ theme }) => theme.color.darkText};
  }
  a {
    text-decoration: none;
    cursor: pointer;
  }
  ul {
    list-style: none;
  }
  .active {
    border-color: ${({ theme }) => theme.color.secondary};
  }
`;

export const Container = styled.div`
  max-width: 68.75rem;
  margin: 0 auto;
  padding: 0 1.25rem;
`;
