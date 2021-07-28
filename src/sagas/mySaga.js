import { fork } from "redux-saga/effects";
import productSaga from "./product";
import shopSaga from "./shop";

function* rootSaga() {
  yield fork(productSaga);
  yield fork(shopSaga);
}

export default rootSaga;
