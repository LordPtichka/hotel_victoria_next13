export interface IStock {
  id: number
  title: string
  description: string
  shortDescription: string
  img: string // ????
  imgPath: string
}

export interface IStockData {
  stocksAll: IStock[]
}

export interface IStockDataSingle {
  stock: IStock
}
