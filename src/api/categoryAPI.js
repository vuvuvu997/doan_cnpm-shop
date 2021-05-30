import axiosClient from "./axiosClient";

export const categoryAPI = {
  getAll: function () {
    const url = "/categories";
    return axiosClient.get(url);
  },
};
