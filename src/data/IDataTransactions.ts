export interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
  createdAt: string
}

export interface CreateTransactionDTO {
  category: string
  description: string
  price: number
  type: 'income' | 'outcome'
}

export interface IDataTransactions {
  fetchTransactions: (query?: string) => Promise<Transaction[]>
  createTransaction: (data: CreateTransactionDTO) => Promise<Transaction>
  deleteTransaction: (id: number) => Promise<void>
}
