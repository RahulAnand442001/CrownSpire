import { combineReducers } from "redux";

// custom reducers
import userReducer from "./user/user.reducer";

// combined Reducers
export default combineReducers({
  user: userReducer,
});
