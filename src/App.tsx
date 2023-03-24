import { ThemeProvider } from 'styled-components'
import { Footer } from './components/Footer'
import { TransactionsProvider } from './contexts/TransactionsContext'
import { Transactions } from './pages/Transactions'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { Analytics } from '@vercel/analytics/react'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Analytics />

      <TransactionsProvider>
        <Transactions />
        <Footer />
      </TransactionsProvider>
    </ThemeProvider>
  )
}
