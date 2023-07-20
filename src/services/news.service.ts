import { INews } from "@/interface/news.interface"
import axios from "axios"

const API_URL = 'http://localhost:4200'

export const NewsService = {
    async getAllNews() {
        const { data } = await axios.get<INews[]>(`${API_URL}/news`)
        return data
    },

    async getDyIDNews(id:string) {
        const { data } = await axios.get<INews[]>(`${API_URL}/news`, {params: {id}})
        return data [0]
    }
}