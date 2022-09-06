// for multiole reducers
import { combineReducers } from "redux";
import authReducer from "./auth-reducer";
import cartReducer from "./cart_reducer";




export default combineReducers({
    auth: authReducer,
    cart: cartReducer
})