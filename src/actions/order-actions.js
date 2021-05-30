import * as actionTypes from "../constants/action-types-order";
export const fetchListOrder = (data) => {
  return {
    type: actionTypes.FETCH_LIST_ORDER,
    payload: { data },
  };
};
