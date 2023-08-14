import { IRoom } from "@/interface/room.interface"
import axios from "axios"

const API_URL = `http://${process.env.HOST}`

export const RoomsService = {
  async getRooms() {
    const { data } = await axios.get<IRoom[]>(`${API_URL}/rooms/all`)
    return data
  },

  async getByIDroom(id: string) {
    const { data } = await axios.get<IRoom[]>(`${API_URL}/rooms`, { params: { id } })
    return data[0]
  },
}
