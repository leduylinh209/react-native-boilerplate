import { api } from './api';

export const loginService = {
  loginUser: function (username: string, password: string) {
    return api.post("login/", { username, password });
  }
}