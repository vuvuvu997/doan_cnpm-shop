import * as actionTypes from "./../constants/product";
export const getProduct = (filter) => {
  return {
    type: actionTypes.GET_PRODUCT,
    payload: { data: filter },
  };
};

export const getProductSuccess = (data) => {
  return {
    type: actionTypes.GET_PRODUCT_SUCCESS,
    payload: { data },
  };
};

export const getProductFail = (error) => {
  return {
    type: actionTypes.GET_PRODUCT_FAIL,
    payload: { data: error },
  };
};

export const getDetailProduct = (id) => {
  return {
    type: actionTypes.GET_DETAIL_PRODUCT,
    payload: { data: id },
  };
};

export const getDetailProductSuccess = (data) => {
  return {
    type: actionTypes.GET_DETAIL_PRODUCT_SUCCESS,
    payload: { data },
  };
};

export const getDetailProductFail = (error) => {
  return {
    type: actionTypes.GET_DETAIL_PRODUCT_FAIL,
    payload: { data: error },
  };
};

export const deleteProduct = (id) => {
  return {
    type: actionTypes.DELETE_PRODUCT,
    payload: { data: id },
  };
};

export const deleteProductSuccess = (id) => {
  return {
    type: actionTypes.DELETE_PRODUCT_SUCCESS,
    payload: { data: id },
  };
};

export const deleteProductFail = (error) => {
  return {
    type: actionTypes.DELETE_PRODUCT_FAIL,
    payload: { data: error },
  };
};

export const editProduct = (data, id) => {
  return {
    type: actionTypes.EDIT_PRODUCT,
    payload: { data: data, id },
  };
};

export const editProductSuccess = (data) => {
  return {
    type: actionTypes.EDIT_PRODUCT_SUCCESS,
    payload: { data },
  };
};

export const editProductFail = (error) => {
  return {
    type: actionTypes.EDIT_PRODUCT_FAIL,
    payload: { data: error },
  };
};

export const addProduct = (data) => {
  return {
    type: actionTypes.ADD_PRODUCT,
    payload: { data: data },
  };
};

export const addProductSuccess = (data) => {
  return {
    type: actionTypes.ADD_PRODUCT_SUCCESS,
    payload: { data: data },
  };
};

export const addProductFail = (error) => {
  return {
    type: actionTypes.ADD_PRODUCT_FAIL,
    payload: { data: error },
  };
};
