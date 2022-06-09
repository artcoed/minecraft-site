import axios from "axios";
import {errorGetPrice, setDonate} from "../reducers/donateReducer";


export const donateGetted = (nickname) => {
    return async dispatch => {
        try {
            const response = await axios.get(`http://localhost:8080/api/getprice?name=${nickname}`)
            dispatch(setDonate(response.data))
        } catch (e) {
            try {
                dispatch(errorGetPrice(e.response.data.message))
            }catch (e) {
                dispatch(errorGetPrice("Ошибка подключения к базе данных"))
            }

        }
    }
}