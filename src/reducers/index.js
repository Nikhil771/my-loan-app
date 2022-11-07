import { combineReducers } from "redux";
import signUpReducer from "../pages/signUp/reducer";

const createRootReducer = combineReducers({
  signUpReducer,
});

export default createRootReducer;
