import axiosClient from "./axiosClient";

const cartAPI = {
  getCartUser: (id) => {
    const url = `/carts/${id}`;
    return axiosClient.get(url);
  },
};

export default cartAPI;
