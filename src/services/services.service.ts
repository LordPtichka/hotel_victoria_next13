import { IService } from "@/interface/service.interface"
import axios from "axios"

const API_URL = `http://${process.env.HOST}`

export const ServicesService = {
  async getServices() {
    const { data } = await axios.get<IService[]>(`${API_URL}/services/all`)
    return data
  },

  async getByIDservice(id: string) {
    const { data } = await axios.get<IService[]>(`${API_URL}/services`, { params: { id } })
    return data[0]
  },
}
