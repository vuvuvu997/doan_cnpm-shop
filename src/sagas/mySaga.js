import { fork } from "redux-saga/effects";
import productSaga from "./product";

function* rootSaga() {
  yield fork(productSaga);
}

export default rootSaga;
