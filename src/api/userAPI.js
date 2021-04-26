import axiosClient from "./axiosClient";

const userAPI = {
  login: (data) => {
    const url = "/auth/login";
    const newData = JSON.stringify(data);
    return axiosClient.post(url, newData);
  },
  register: (data) => {
    const url = "/user";
    const params = data;
    return axiosClient.post(url, params);
  },
};

export default userAPI;
