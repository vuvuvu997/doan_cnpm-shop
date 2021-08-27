import { authDelete, authGet, authPost, authPut } from "./axiosClient";

export const productApi = {
  getProductList: (params) => {
    const url = `/shops/products?${params}`;
    return authGet(url);
  },

  getProductListSearch: (params) => {
    const url = `/shops/search?${params}`;
    return authGet(url);
  },

  addProduct: (data) => {
    const url = "/products";
    return authPost(url, data);
  },
  updateProduct: (id, data) => {
    const url = `/products/${id}`;
    return authPut(url, data);
  },
  deleteProduct: (id) => {
    const url = `/products/${id}`;
    return authDelete(url);
  },
  getDetailProduct: (id) => {
    const url = `/products/${id}`;
    return authGet(url);
  },
  getProductBanApi: () => {
    const url = "/shops/products/banned?page=0";
    return authGet(url);
  },
};
