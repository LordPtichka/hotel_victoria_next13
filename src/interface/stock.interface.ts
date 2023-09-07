export interface IStock {
  id: number
  title: string
  description: string
  shortDescription: string
  imageName: string
}

export interface IStockData {
  stocksAll: IStock[]
  dataCard: IStock[]
}

export interface IStockDataSingle {
  stock: IStock
}
