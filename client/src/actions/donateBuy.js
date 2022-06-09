import axios from "axios";
import {errorGetPrice} from "../reducers/donateReducer";

export const giveDonate = (name, donate) => {
    return async dispatch => {
        try {
            if (!name){
                return
            }
            const response = await axios.post(`http://localhost:8080/api/givedonateplayer`, {
                name,
                donate
            })
            console.log(response)
        } catch (e) {
            try {
                dispatch(errorGetPrice(e.response.data.message))
            }catch (e) {
                dispatch(errorGetPrice("Ошибка подключения к базе данных"))
            }

        }
    }
}