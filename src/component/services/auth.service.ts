import axios from "axios"
import { IUserData } from "../interface/user.interface"


export const AuthService = {
    async getUser() {
        const { data } = await axios.get<IUserData[]>('http://localhost:4200/users')
        return data
    }
}

