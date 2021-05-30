import * as actionTypes from "./../constants/action-types-cart";

export const fetchCart = (data) => {
  return {
    type: actionTypes.FETCH_CART,
    payload: { data },
  };
};

export const addProductToCart = (data) => {
  return {
    type: actionTypes.ADD_PRODUCT_TO_CART,
    payload: { data },
  };
};

export const changeProductToCart = (data) => {
  return {
    type: actionTypes.CHANGE_PRODUCT_TO_CART,
    payload: { data },
  };
};

export const deleteProductToCart = (id) => {
  return {
    type: actionTypes.DELETE_PRODUCT_TO_CART,
    payload: { id },
  };
};

export const isProductBought = (data) => {
  return {
    type: actionTypes.IS_PRODUCT_BOUGHT,
    payload: { data },
  };
};

export const deleteProductListWhenOrdered = (data) => {
  return {
    type: actionTypes.DELETE_PRODUCT_LIST_WHEN_ORDERED,
    payload: { data },
  };
};
