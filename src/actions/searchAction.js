import * as actionTypes from "./../constants/action-types-search";
export const searchProduct = (key) => {
  return {
    type: actionTypes.SEARCH_PRODUCT,
    payload: { data: key },
  };
};
