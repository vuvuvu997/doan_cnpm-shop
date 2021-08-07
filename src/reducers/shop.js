import * as ActionTypes from "./../constants/shop";
let initialState = {
  isLogin: false,
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN_SUCCESS:
      return { isLogin: true, email: action.payload.data };

    case ActionTypes.GET_PROFILE_SHOP_SUCCESS:
      return { ...state, isLogin: true, ...action.payload.data };

    case ActionTypes.CREATE_SHOP_SUCCESS:
      return {
        ...state,
        ...action.payload.data,
      };

    case ActionTypes.UPDATE_SHOP_SUCCESS:
      return { ...state, ...action.payload.data };

    case ActionTypes.LOGOUT:
      return {
        isLogin: false,
      };

    default:
      return state;
  }
};

export default myReducer;
