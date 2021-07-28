import { call, delay, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as actionProductTypes from "./../constants/product";
import { productApi } from "./../api/product";
import history from "./../utils/History";
import { toastSucces, toastError } from "./../helpers/toastMessage";
import queryString from "query-string";
import {
  addProductFail,
  addProductSuccess,
  deleteProductFail,
  deleteProductSuccess,
  editProductSuccess,
  getProductFail,
  getProductSuccess,
} from "../actions/product";
import { GET_KEY_SEARCH } from "../constants/control-actions";
import { getKeySearchSuccess } from "../actions/contraol-actions";
import { hideLoading, showLoading } from "../actions/ui";

function* getProductSaga({ payload }) {
  const filter = payload.data;
  yield put(showLoading());
  try {
    let res = null;
    if (filter.hasOwnProperty("name_find")) {
      res = yield call(
        productApi.getProductListSearch,
        queryString.stringify(filter)
      );
    } else {
      res = yield call(
        productApi.getProductList,
        queryString.stringify(filter)
      );
    }
    yield put(getProductSuccess(res.data.products));
  } catch (error) {
    yield put(getProductFail(error));
  }
  yield put(hideLoading());
}

function* deleteProductSaga({ payload }) {
  const id = payload.data;
  try {
    yield call(productApi.deleteProduct, id);
    yield put(deleteProductSuccess(id));
    toastSucces("Delete product successfully!");
  } catch (error) {
    yield put(deleteProductFail(error));
    toastError("Opp! Please try again!");
  }
}

function* editProductSaga({ payload }) {
  const id = payload.id;
  const data = payload.data;
  try {
    const res = yield call(productApi.updateProduct, id, data);
    console.log(res);
    yield put(editProductSuccess(res.data));
    toastSucces("Edit product successfully!");
    history.replace("/portal/product/list/all");
  } catch (error) {
    yield put(deleteProductFail(error));
    toastError("Opp! Please try again!");
  }
}

function* addProductSaga({ payload }) {
  const data = payload.data;
  try {
    const res = yield call(productApi.addProduct, data);
    yield put(addProductSuccess(res.data));
    toastSucces("Add product successfully!");
    history.push("/portal/product/list/all");
  } catch (error) {
    console.log(error);
    yield put(addProductFail(error));
    toastError("Opp! Please try again!");
  }
}

function* getKeySearchSaga({ payload }) {
  yield delay(500);
  yield put(getKeySearchSuccess(payload.data));
}

export default function* productSaga() {
  yield takeEvery(actionProductTypes.GET_PRODUCT, getProductSaga);
  yield takeEvery(actionProductTypes.DELETE_PRODUCT, deleteProductSaga);
  yield takeLatest(actionProductTypes.EDIT_PRODUCT, editProductSaga);
  yield takeLatest(actionProductTypes.ADD_PRODUCT, addProductSaga);
  yield takeLatest(GET_KEY_SEARCH, getKeySearchSaga);
}
