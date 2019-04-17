import userReducer from "./userReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  userDatas: userReducer
});

export default rootReducer;
