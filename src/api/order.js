import { authGet } from "./axiosClient";
export const fetchOrderListApi = async () => {
  const url = "/shops/orders";
  const res = await authGet(url);
  return res.data;
};
