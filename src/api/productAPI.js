import axiosClient from "./axiosClient";

const productApi = {
  getProducts: (params) => {
    const url = `/products?${params}`;
    return axiosClient.get(url);
  },
  get: (id) => {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },
  getProductsDiscount: (params) => {
    const url = `/products?${params}`;
    return axiosClient.get(url, { params });
  },
};

export default productApi;
