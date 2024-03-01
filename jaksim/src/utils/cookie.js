import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const getCookie = (name) => {
  return cookies.get(name);
};

export const setCookie = (name, value, options) => {
  return cookies.set(name, value, { ...options });
};

export const removeCookie = (name, options) => {
  return cookies.remove(name, { ...options });
};
