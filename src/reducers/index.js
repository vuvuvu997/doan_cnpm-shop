import { combineReducers } from "redux";
import shop from "./shop";
import product from "./product";
import filter from "./filter";
import ui from "./ui";

const rootReducer = combineReducers({
  product,
  shop,
  filter,
  ui,
});

export default rootReducer;
