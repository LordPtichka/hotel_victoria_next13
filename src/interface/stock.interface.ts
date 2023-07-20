
export interface IStock {
    id: number
    title: string
    description: string
    image: string
}

export interface IStockData {
    newsAll: IStock[]
}


export interface IStockDataSingle {
    news: IStock
}