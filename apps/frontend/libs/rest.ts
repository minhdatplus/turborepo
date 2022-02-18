import Axios, { AxiosRequestConfig } from 'axios';
// import config from '@/config';

function authRequestInterceptor(config: AxiosRequestConfig) {
  // const userToken = storage.getUserToken();
  // if (userToken) {
  //   config.headers.Authorization = `${userToken}`;
  // }
  config.headers.Accept = 'application/json';
  return config;
}

export const axios = Axios.create({
  baseURL: 'http://localhost:1337/api/',
});

axios.interceptors.request.use(authRequestInterceptor);
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const message = error.response?.data?.message || error.message;
    console.log(message);

    return Promise.reject(error);
  }
);