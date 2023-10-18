export interface IRoom {
  id: number
  title: string
  description: string
  image: string
  price: number
  category: string
  imageName: string
}

export interface IRoomData {
  roomAll: IRoom[]
}

export interface IRoomDataSingle {
  room: IRoom
}
