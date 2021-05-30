import * as actionTypes from "./../constants/actionTypes";
let initialState = {};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PROFILE_USER:
      const newData = { ...action.payload.data };
      return newData;
    default:
      return state;
  }
};

export default myReducer;
