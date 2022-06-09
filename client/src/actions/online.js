import {setOnline} from "../reducers/onlineReducer";
import axios from "axios";

export const onlineGetted = () => {
    return async dispatch =>{
        try {
            const response = await axios.get(`http://localhost:8080/api/getonline`)
            dispatch(setOnline(response.data.nowOnlinePlayers))
        } catch (e) {
            console.log(e)
        }
    }
}