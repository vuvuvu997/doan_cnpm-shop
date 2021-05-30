import { combineReducers } from "redux";
import products from "./products";
import userLogin from "./userLogin";
import userRegister from "./userRegister";
import cart from "./cart";
import productInCategory from "./product-in-category";
import order from "./order";
import popupForm from "./popup-form";
import user from "./user";
import keySearch from "./keySearch";

const rootReducer = combineReducers({
  products,
  userLogin,
  userRegister,
  cart,
  order,
  productInCategory,
  popupForm,
  user,
  keySearch,
});

export default rootReducer;
