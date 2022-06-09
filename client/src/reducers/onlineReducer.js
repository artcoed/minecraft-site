const TAKE_ONLINE_ON_SERVER = "TAKE_ONLINE_ON_SERVER"

const defaultState = {
    online: 0
}

export default function onlineReducer(state = defaultState, action) {
    switch (action.type) {
        case TAKE_ONLINE_ON_SERVER:
            return {
                ...state,
                online: action.payload
            }
        default:
            return state
    }
}

export const setOnline = (online) => ({type: TAKE_ONLINE_ON_SERVER, payload: online})