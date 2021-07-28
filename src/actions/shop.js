import * as ActionTypes from "./../constants/shop";
export const getProfileShop = () => {
  return {
    type: ActionTypes.GET_PROFILE_SHOP,
  };
};

export const getProfileShopSuccess = (data) => {
  return {
    type: ActionTypes.GET_PROFILE_SHOP_SUCCESS,
    payload: { data },
  };
};

export const login = (data) => {
  return {
    type: ActionTypes.LOGIN,
    payload: { data },
  };
};

export const loginSuccess = (data) => {
  return {
    type: ActionTypes.LOGIN_SUCCESS,
    payload: { data },
  };
};

export const createShop = (data) => {
  return {
    type: ActionTypes.CREATE_SHOP,
    payload: { data },
  };
};

export const createShopSuccess = (data) => {
  return {
    type: ActionTypes.CREATE_SHOP_SUCCESS,
    payload: { data },
  };
};

export const logout = () => {
  return {
    type: ActionTypes.LOGOUT,
  };
};

export const updateShop = (data) => {
  return {
    type: ActionTypes.UPDATE_SHOP,
    payload: { data },
  };
};

export const updateShopSuccess = (data) => {
  return {
    type: ActionTypes.UPDATE_SHOP_SUCCESS,
    payload: { data },
  };
};
