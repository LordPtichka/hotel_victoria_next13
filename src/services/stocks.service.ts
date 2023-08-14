import { IStock } from "@/interface/stock.interface"
import axios from "axios"

const API_URL = `http://${process.env.HOST}`

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
