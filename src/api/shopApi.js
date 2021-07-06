import { authGet, authPost, authPut } from "./axiosClient";

export const shopApi = {
  login: async (data) => {
    const url = "/users/login";
    const res = await authPost(url, data);
    return res.data;
  },
  createShop: (data) => {
    const url = "/shops";
    const res = authPost(url, data);
    return res;
  },
  updateShop: (data) => {
    const url = `/shops`;
    return authPut(url, data);
  },
  getShopUser: async () => {
    const url = "/shops";
    const res = await authGet(url);
    return res.data;
  },
};

// export async function createShop(data) {
//   const url = "/shops";
//   const res = await authPost(url, data);
//   return res.data;
// }
