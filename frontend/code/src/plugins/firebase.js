import axios from 'axios';

export const axiosAuth = axios.create({
  baseURL: 'https://identitytoolkit.googleapis.com/v1'
});

export const axiosRefresh = axios.create({
  baseURL: 'https://securetoken.googleapis.com/v1'
});
