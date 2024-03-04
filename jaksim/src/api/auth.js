import jaksimApi from './index';

export const login = async (email, password) => {
  const response = await jaksimApi.post('/user/login', { email, password });
  return response;
};

export const register = async (
  email,
  nickname,
  password,
  serviceCheck,
  personalCheck,
  eventCheck
) => {
  const response = await jaksimApi.post('/user', {
    email,
    nickname,
    password,
    serviceCheck,
    personalCheck,
    eventCheck,
  });
  return response;
};

export const findPw = async (email) => {
  const response = await jaksimApi.post('/user/email', { email });
  return response;
};
