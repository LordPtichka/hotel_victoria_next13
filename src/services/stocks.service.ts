import { INews } from "@/interface/news.interface"
import { IStock } from "@/interface/stock.interface"
import axios from "axios"

const API_URL = 'http://localhost:4200'

export const StocksService = {
    async getStocks() {
        const { data } = await axios.get<IStock[]>(`${API_URL}/stocks`)
        return data
    },

    async getDyIDstock(id:string) {
        const { data } = await axios.get<IStock[]>(`${API_URL}/stocks`, {params: {id}})
        return data [0]
    }
}