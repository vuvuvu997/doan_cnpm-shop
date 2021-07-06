import {
  GET_KEY_SEARCH,
  GET_KEY_SEARCH_SUCCESS,
} from "../constants/control-actions";

export const getKeySearch = (keyword) => {
  return {
    type: GET_KEY_SEARCH,
    payload: { data: keyword },
  };
};

export const getKeySearchSuccess = (keyword) => {
  return {
    type: GET_KEY_SEARCH_SUCCESS,
    payload: { data: keyword },
  };
};
