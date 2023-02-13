import React from "react";
import { render } from "@testing-library/react";
import { mainTheme } from "../styles/theme";
import { GlobalStyle } from "../styles/globalStyles";
import { ThemeProvider } from "styled-components";

const AllTheProviders = ({ children }) => {
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
