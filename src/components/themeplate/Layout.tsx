import React from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "../../utils/theme";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    margin: 0;
    padding: 0;
  }
`;

const StyledWraper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.dark};
`;
type Props = {
  children: JSX.Element;
};
function Layout({ children }: Props) {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <StyledWraper>{children}</StyledWraper>
      </>
    </ThemeProvider>
  );
}

export default Layout;
