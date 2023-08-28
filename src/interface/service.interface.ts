export interface IService {
  title: string
  description: string
  image: string
  price: number
  category: string
}

export interface IServiceData {
  serviceAll: IService[]
}

export interface IServiceDataSingle {
  service: IService
}
