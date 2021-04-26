import * as actionTypes from "../constants/actionTypes";
import * as toastMessage from "../helpers/toastMessage";
let initialState = {
  infoUser: {},
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_LOGIN:
      console.log(action.payload);
      const newState = {
        ...state,
        infoUser: { ...action.payload },
      };
      console.log(newState);
      // toastMessage.toastSucces(`Welcome ${action.payload.username}`);
      return newState;

    case actionTypes.USER_LOGOUT:
      const logoutState = {
        ...state,
        infoUser: {},
      };
      return logoutState;
    default:
      return { ...state };
  }
};

export default myReducer;
