import * as ActionTypes from "../constants/control-actions";
let initialState = {
  page: 0,
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_KEY_SEARCH_SUCCESS:
      return { ...state, name_find: action.payload.data };
    default:
      return state;
  }
};

export default myReducer;
