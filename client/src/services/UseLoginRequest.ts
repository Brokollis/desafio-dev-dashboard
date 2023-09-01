import { IAuthUserData } from "../interfaces/IAuth"
import {authApi} from '../utils/authApi'

export const setUserLocalStorage = (user: IAuthUserData | null) => {
    localStorage.setItem('us', JSON.stringify(user))
}

export const getUserLocalStorage = () => {
    const user = localStorage.getItem('us')

    if (user) {
        return JSON.parse(user) ?? null
    }
    return null
}

export const UseLoginRequest = async (email: string, password: string) => {

    try {
        const request = await authApi.post('login', { email, password })
        return request.data

    } catch (error) {
        return null

    }

}