import axios from "axios"
import { IUser, IUserData } from "../interface/user.interface"

const API_URL = 'http://localhost:4200'

export const AuthService = {
    async getUser() {
        const { data } = await axios.get<IUser[]>(`${API_URL}/users`)
        return data
    }
}

