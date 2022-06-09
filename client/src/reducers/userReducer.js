const SET_USER = "SET_USER"
const LOGOUT = "LOGOUT"
const ERROR_LOGIN = "ERROR_LOGIN"

const defaultState = {
    currentUser: {},
    isAuth: false,
    error: false,
}

export default function userReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                currentUser: action.payload,
                isAuth: true,
                error: false
            }
        case LOGOUT:
            localStorage.removeItem('token')
            return {
                ...state,
                currentUser: {},
                isAuth: false,
                error: false
            }
        case ERROR_LOGIN:
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
}

export const setUser = user => ({type: SET_USER, payload: user})
export const logoutUser = () => ({type: LOGOUT})
export const errorLogin = error => ({type: ERROR_LOGIN, error: error})