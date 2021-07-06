import * as ActionTypes from "./../constants/shop";
export const getProfileShop = (data) => {
  return {
    type: ActionTypes.GET_PROFILE_SHOP,
    payload: { data },
  };
};
