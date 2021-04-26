import * as actionTypes from "./../constants/actionTypes";

export const userLogin = (data) => {
  return {
    type: actionTypes.USER_LOGIN,
    payload: data,
  };
};

export const userLogout = () => {
  return {
    type: actionTypes.USER_LOGOUT,
  };
};

export const userRegister = (data) => {
  return {
    type: actionTypes.USER_REGISTER,
    payload: data,
  };
};

export const getUser = (data) => {
  return {
    type: actionTypes.GET_USER,
    payload: data,
  };
};
