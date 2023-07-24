export interface INews {
    id: number
    title: string
    description: string
    img: string
}

export interface INewsData {
    newsAll: INews[]
}


export interface INewsDataSingle {
    news: INews
}