const GET_PRICE_DONATE = "GET_PRICE_DONATE"
const ERROR_GET_PRICE_DONATE = "ERROR_GET_PRICE_DONATE"

const defaultState = {
    price: 0,
    error: false
}

export default function donateReducer(state = defaultState, action){
    switch (action.type) {
        case GET_PRICE_DONATE:
            return {
                ...state,
                price: action.payload,
                error: false
            }
        case ERROR_GET_PRICE_DONATE:
            return {
                ...state,
                error: action.error,
            }
        default:
            return state
    }
}

export const setDonate = (price) => ({type: GET_PRICE_DONATE, payload: price})
export const errorGetPrice = error => ({type: ERROR_GET_PRICE_DONATE, error: error})