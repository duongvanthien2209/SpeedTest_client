import axios from 'axios';
import queryString from 'query-string';
import { base_url } from '../constants/index';

const axiosClient = axios.create({
  baseURL: base_url,
  headers: { 'content-type': 'application/json' },
  // headers: { 'content-type': 'multipart/form-data' },
  paramsSerializer: params => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async config => {
  let token = localStorage.getItem('token');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

axiosClient.interceptors.response.use(response => {
  if (response && response.data) {
    return response.data;
  }

  return response;
});

export default axiosClient;
