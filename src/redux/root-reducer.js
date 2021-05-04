import { combineReducers } from "redux";

// custom reducers
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

// combined Reducers
export default combineReducers({
	user: userReducer,
	cart: cartReducer,
});
