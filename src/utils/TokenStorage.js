import { AUTH_TOKEN } from "../consts";

const getToken = () => localStorage.getItem(AUTH_TOKEN);

const storeToken = (value) => {
  localStorage.setItem(AUTH_TOKEN, value);
};

const deleteToken = () => {
  localStorage.removeItem(AUTH_TOKEN);
};

export default {
  getToken,
  storeToken,
  deleteToken,
};
