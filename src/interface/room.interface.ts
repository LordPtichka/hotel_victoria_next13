export interface IRoom {
  title: string
  description: string
  image: string
  price: number
  category: string
}

export interface IRoomData {
  roomsAll: IRoom[]
}

export interface IRoomDataSingle {
  room: IRoom
}
