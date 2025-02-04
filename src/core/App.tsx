import { useAppSelector } from "./hooks";
import { selectTheme } from "../features/Homepage/Toggle/themeSlice";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import Homepage from "../features/Homepage";

function App() {
  const darkMode = useAppSelector(selectTheme);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Homepage />
    </ThemeProvider>
  );
}

export default App;
