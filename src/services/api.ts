import axios from 'axios';

const api = axios.create({
  baseURL: '',
  responseType: 'json',
  withCredentials: true,
});

export { api };