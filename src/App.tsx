import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { GlobalStyle } from "./styles/Global";
import { Transations } from "./pages/Transations";
import { TransactionsProvider } from "./contexts/TransactionsContext";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TransactionsProvider>
        <Transations />
      </TransactionsProvider>
    </ThemeProvider>
  )
}
