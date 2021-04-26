import * as actionTypes from "./../constants/actionTypes";

export const fetchProductsList = (products) => {
  return {
    type: actionTypes.FETCH_PRODUCTS_LIST,
    payload: {
      products,
    },
  };
};
