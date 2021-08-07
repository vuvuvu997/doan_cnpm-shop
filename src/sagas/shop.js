import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  getProfileShop,
  getProfileShopSuccess,
  loginSuccess,
} from "../actions/shop";
import { getProfileShopApi, login } from "../api/shopApi";
import { GET_PROFILE_SHOP, LOGIN } from "../constants/shop";
import { toastError } from "../helpers/toastMessage";
import history from "../utils/History";

function* loginSaga({ payload }) {
  try {
    const res = yield call(login, payload.data);
    if (res.status === 200) {
      sessionStorage.setItem(
        "authentication_token_shop",
        res.data.authentication_token
      );
      yield put(loginSuccess(res.data.email));
      yield put(getProfileShop());
      if (res.data.permisions.length === 2) {
        history.push("/");
      } else {
        history.push("/shop/create");
      }
    }
  } catch (error) {
    console.log(error);
    toastError("Login failure!");
  }
}

function* getProfileShopSaga() {
  try {
    const res = yield call(getProfileShopApi);
    if (res.status === 200) {
      yield put(getProfileShopSuccess(res.data));
    }
  } catch (error) {}
}

function* shopSaga() {
  yield takeLatest(LOGIN, loginSaga);
  yield takeEvery(GET_PROFILE_SHOP, getProfileShopSaga);
}

export default shopSaga;
