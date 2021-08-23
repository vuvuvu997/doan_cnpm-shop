import { authGet, authPatch } from "./axiosClient";
export const fetchOrderListApi = async () => {
  const url = "/shops/orders";
  const res = await authGet(url);
  return res.data;
};

export const confirmOrderApi = (id) => {
  const url = `/orders/${id}`;
  return authPatch(url);
};
