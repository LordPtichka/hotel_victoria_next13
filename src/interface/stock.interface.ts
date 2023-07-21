
export interface IStock {
    id: number
    title: string
    description: string
    image: string
}

export interface IStockData {
    stocksAll: IStock[]
}


export interface IStockDataSingle {
    stock: IStock
}