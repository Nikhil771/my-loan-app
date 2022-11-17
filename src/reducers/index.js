import { combineReducers } from "redux";
import signUpReducer from "../pages/signUp/reducer";

const rootReducer = combineReducers({
  signUpReducer,
});

export default rootReducer;
