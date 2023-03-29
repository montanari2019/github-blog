import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Router } from "./@Router";
import { GlobalStyle } from "./styles/global";
import { DefaultTheme } from "./styles/themes/DefaultThemes";

export function App() {
  return (
    
      <ThemeProvider theme={DefaultTheme}>
        <GlobalStyle />
        <Router/>
      </ThemeProvider>
    
  );
}
