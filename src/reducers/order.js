import * as actionTypes from "./../constants/action-types-order";
let initialState = [];
const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_LIST_ORDER:
      return [...action.payload.data];
    default:
      return [...state];
  }
};

export default myReducer;
