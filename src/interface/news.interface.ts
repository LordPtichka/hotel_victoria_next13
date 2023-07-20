export interface INews {
    id: number
    title: string
    description: string
    image: string
}

export interface INewsData {
    newsAll: INews[]
}


export interface INewsDataSingle {
    news: INews
}