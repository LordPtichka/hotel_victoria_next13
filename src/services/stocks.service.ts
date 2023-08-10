import { IStock } from "@/interface/stock.interface"
import axios from "axios"

const API_URL = "http://192.168.10.26:4200"

export const StocksService = {
  async getStocks() {
    // const { data } = await axios.get<IStock[]>(`${API_URL}/stocks`)
    const { data } = await axios.get<IStock[]>(`${API_URL}/Stocks/AllStocks`)
    return data
  },

  async getByIDstock(id: string) {
    // const { data } = await axios.get<IStock[]>(`${API_URL}/stocks`, { params: { id } })
    const { data } = await axios.get<IStock[]>(`${API_URL}/Stocks`, { params: { id } })
    return data[0]
  },
}
