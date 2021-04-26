import axios from "axios";
import queryString from "query-string";
import { baseURL } from "../constants/baseURL";

//set up default config for http requests here
const axiosClient = axios.create({
  baseURL: baseURL,
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  (err) => {
    throw err;
  }
);

export default axiosClient;
