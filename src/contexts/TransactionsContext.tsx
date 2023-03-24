import { ReactNode, useEffect, useState, useCallback } from 'react'
import { createContext } from 'use-context-selector'
import { HttpTransactions } from '../data/HttpTransactions'
import { CreateTransactionDTO, Transaction } from '../data/IDataTransactions'
import { LocalStorageTransactions } from '../data/LocalStorageTransactions'
import { priceFormatter } from '../utils/formatter'

interface TransactionsContextType {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (data: CreateTransactionDTO) => Promise<void>
  deleteTransaction: (data: Transaction) => Promise<void>
}

interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionsContextType)

const DataTransactions = {
  development: () => new HttpTransactions(),
  production: () => new LocalStorageTransactions(),
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const mode = import.meta.env.MODE

  const [transactions, setTransactions] = useState<Transaction[]>([])
  const dataTransactions =
    mode === 'production'
      ? DataTransactions.production()
      : DataTransactions.development()

  const fetchTransactions = useCallback(async (query?: string) => {
    const transactions = await dataTransactions.fetchTransactions(query)

    setTransactions(transactions)
  }, [])

  const createTransaction = useCallback(async (data: CreateTransactionDTO) => {
    const transaction = await dataTransactions.createTransaction(data)

    setTransactions((state) => [transaction, ...state])
  }, [])

  const deleteTransaction = useCallback(async (data: Transaction) => {
    const { id, description, price } = data

    const confirmDeleteTransaction = window.confirm(
      `Você realmente deseja apagar a transação: '${description}' no valor de '${priceFormatter.format(
        price,
      )}'?`,
    )

    if (confirmDeleteTransaction) {
      await dataTransactions.deleteTransaction(data.id)
      setTransactions((state) =>
        state.filter((transaction) => transaction.id !== id),
      )
    }
  }, [])

  useEffect(() => {
    fetchTransactions()
  }, [fetchTransactions])

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        fetchTransactions,
        createTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
