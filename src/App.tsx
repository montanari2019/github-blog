import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Router } from "./@Router";
import { GlobalStyle } from "./styles/global";
import { DefaultTheme } from "./styles/themes/DefaultThemes";



import ReactGA from "react-ga";
const configValue = "G-RRKZJ678B3";
ReactGA.initialize(configValue);

export function App() {
  return (
    
      <ThemeProvider theme={DefaultTheme}>
        <GlobalStyle />
        <Router/>
      </ThemeProvider>
    
  );
}
