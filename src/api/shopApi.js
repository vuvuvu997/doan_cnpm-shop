import { authGet, authPost, authPut } from "./axiosClient";

export const login = async (data) => {
  const url = "/users/login";
  return authPost(url, data);
};

export const createShop = (data) => {
  const url = "/shops";
  return authPost(url, data);
};

export const updateShop = (data) => {
  const url = `/shops`;
  return authPut(url, data);
};

export const getProfileShopApi = () => {
  const url = "/shops";
  return authGet(url);
};
