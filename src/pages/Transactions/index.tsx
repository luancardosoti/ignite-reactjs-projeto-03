import { useContextSelector } from 'use-context-selector'
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { dateFormatter, priceFormatter } from '../../utils/formatter'
import { SearchForm } from './components/SearchForm'

import { Trash } from 'phosphor-react'

import {
  PriceHighlight,
  TransactionContainer,
  TransactionsTable,
} from './styles'
import { useTheme } from 'styled-components'

export function Transactions() {
  const { transactions, deleteTransaction } = useContextSelector(
    TransactionsContext,
    (context) => ({
      transactions: context.transactions,
      deleteTransaction: context.deleteTransaction,
    }),
  )
  const theme = useTheme()

  return (
    <div>
      <Header />
      <Summary />

      <TransactionContainer>
        <SearchForm />

        <div className="contrainerTable scrollbar">
          <TransactionsTable>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHighlight variant={transaction.type}>
                      {transaction.type === 'outcome' && '- '}
                      {priceFormatter.format(transaction.price)}
                    </PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {dateFormatter.format(new Date(transaction.createdAt))}
                  </td>
                  <td className="btnDelete">
                    <button onClick={() => deleteTransaction(transaction)}>
                      <Trash size={20} weight="bold" color={theme['red-300']} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </TransactionsTable>
        </div>
      </TransactionContainer>
    </div>
  )
}
