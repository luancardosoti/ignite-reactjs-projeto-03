import {
  CreateTransactionDTO,
  IDataTransactions,
  Transaction,
} from './IDataTransactions'

export class LocalStorageTransactions implements IDataTransactions {
  private key = 'dt-money@transactions'

  private setTransactionLocalStorage(data: Transaction[]) {
    localStorage.setItem(this.key, JSON.stringify(data))
  }

  private getTransactionsLocalStorage(): Transaction[] {
    const dataLocalStorage = localStorage.getItem(this.key)

    if (dataLocalStorage) {
      try {
        const data = JSON.parse(dataLocalStorage) as Transaction[]

        return data
      } catch (error) {
        alert('Dados savos inválidos, iremos resetar os valores')
      }
    }
    const data: Transaction[] = []

    this.setTransactionLocalStorage(data)
    return data
  }

  async fetchTransactions(query?: string | undefined): Promise<Transaction[]> {
    const data = this.getTransactionsLocalStorage()
    let transactions: Transaction[] = [...data]

    if (query) {
      transactions = data.filter((item) => {
        console.log(
          item.description.toLowerCase().includes(query.toLowerCase()) ||
            item.category.toLowerCase().includes(query.toLowerCase()) ||
            String(item.price).toLowerCase().includes(query.toLowerCase()),
        )

        return (
          item.description.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase()) ||
          String(item.price).toLowerCase().includes(query.toLowerCase())
        )
      })
    }
    console.log('depois: ', transactions)

    transactions.sort(
      (a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt),
    )

    return transactions
  }

  async createTransaction(data: CreateTransactionDTO): Promise<Transaction> {
    const { category, description, price, type } = data
    const transactions = this.getTransactionsLocalStorage()

    let id = Math.floor(Math.random() * 999999) + 1

    let existsId = !!transactions.find((t) => t.id === id)
    while (existsId) {
      id = Math.floor(Math.random() * 999999) + 1
      existsId = !!transactions.find((t) => t.id === id)
    }

    const transaction: Transaction = {
      id,
      category,
      description,
      price,
      type,
      createdAt: new Date().toISOString(),
    }

    this.setTransactionLocalStorage([transaction, ...transactions])

    return transaction
  }

  async deleteTransaction(id: number): Promise<void> {
    const transactions = this.getTransactionsLocalStorage()

    const newTransactions = transactions.filter((t) => t.id !== id)

    this.setTransactionLocalStorage(newTransactions)
  }
}
