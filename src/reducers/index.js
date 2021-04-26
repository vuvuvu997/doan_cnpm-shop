import { combineReducers } from "redux";
import products from "./products";
import userLogin from "./userLogin";
import userRegister from "./userRegister";

const user = {
  userLogin,
  userRegister,
};
console.log(user);

const rootReducer = combineReducers({
  products,
  userLogin,
  userRegister,
});

export default rootReducer;
