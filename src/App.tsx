import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { DefaultTheme } from "./styles/themes/DefaultThemes";



export function App() {


  return (
   <ThemeProvider theme={DefaultTheme}>
    <h1>Git Blog</h1>
    <GlobalStyle/>
   </ThemeProvider>
  )
}


