import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk";
import userReducer from "./userReducer";
import onlineReducer from "./onlineReducer";
import donateReducer from "./donateReducer";

const rootReducer = combineReducers({
    user: userReducer,
    online: onlineReducer,
    donate: donateReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))