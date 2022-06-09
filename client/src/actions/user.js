import axios from 'axios'
import {setUser, errorLogin} from "../reducers/userReducer";

export const registration = (username, password) => {
    return async dispatch =>{
        try {
            const response = await axios.post(`http://localhost:8080/api/login`, {
                username,
                password
            })
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
        } catch (e) {
            try {
                dispatch(errorLogin(e.response.data.message))
            }catch (e) {
                dispatch(errorLogin("Ошибка подключения к базе данных"))
            }

        }
    }
}

export const auth = () => {
    return async dispatch =>{
        try {
            const response = await axios.get(`http://localhost:8080/api/auth`, {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
        } catch (e) {
            localStorage.removeItem('token')
        }
    }
}