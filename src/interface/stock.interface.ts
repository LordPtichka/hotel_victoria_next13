export interface IStock {
  id: string
  title: string
  description: string
  img: string
}

export interface IStockData {
  stocksAll: IStock[]
}

export interface IStockDataSingle {
  stock: IStock
}
