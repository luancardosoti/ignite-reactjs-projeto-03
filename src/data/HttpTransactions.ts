import { api } from '../lib/axios'
import {
  CreateTransactionDTO,
  IDataTransactions,
  Transaction,
} from './IDataTransactions'

export class HttpTransactions implements IDataTransactions {
  async fetchTransactions(query?: string | undefined): Promise<Transaction[]> {
    const response = await api.get<Transaction[]>('transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })

    return response.data
  }

  async createTransaction(data: CreateTransactionDTO): Promise<Transaction> {
    const { category, description, price, type } = data

    const response = await api.post('transactions', {
      category,
      description,
      price,
      type,
      createdAt: new Date().toISOString(),
    })

    return response.data
  }

  async deleteTransaction(id: number): Promise<void> {
    await api.delete(`transactions/${id}`)
  }
}
