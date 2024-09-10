import axios from "axios";

const API_BAE_URL = "https://api.rimoned.com/api/pharmacy-management/v1";

export const axiosPublic = axios.create({
  baseURL: API_BAE_URL,
  timeout: 60000,
});

export const axiosPrivate = axios.create({
  baseURL: API_BAE_URL,
  timeout: 60000,
});

axiosPrivate.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response;
  },
  function (error) {
    console.log(error);
    // Do something with response error
    if (error.response && error.response.status == 401) {
      localStorage.removeItem("accessToken");
      location.href = "/";
    }
    return Promise.reject(error);
  }
);

export const setPrivateHeaders = () => {
  axiosPrivate.defaults.headers.common["authorization"] =
    localStorage.getItem("accessToken");
};
