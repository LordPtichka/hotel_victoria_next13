import { INews } from "@/interface/news.interface"
import axios from "axios"

const API_URL = "http://localhost:4200"
// http://localhost:4200/News/AllNews
// http://localhost:4200/News/CreateNews

export const NewsService = {
  async getAllNews() {
    // const { data } = await axios.get<INews[]>(`${API_URL}/news`)
    const { data } = await axios.get<INews[]>(`${API_URL}/News/AllNews`)
    return data
  },

  async getDyIDNews(id: string) {
    // const { data } = await axios.get<INews[]>(`${API_URL}/news`, { params: { id } })
    const { data } = await axios.get<INews[]>(`${API_URL}/News/OneNews/`, {params: {id}})
    return data[0]
  },
}
