import * as actionTypes from "./../constants/action-types-popup-form";
export const popupLogin = (value) => {
  return {
    type: actionTypes.POPUP_LOGIN_FORM,
    payload: {
      value,
    },
  };
};

export const popupRegister = (value) => {
  return {
    type: actionTypes.POPUP_REGISTER_FORM,
    payload: {
      value,
    },
  };
};
