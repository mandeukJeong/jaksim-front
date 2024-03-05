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

export const checkAuth = async (verifyNumber) => {
  const response = await jaksimApi.post('/user/auth', { verifyNumber });
  return response;
};

export const changePassword = async (password) => {
  const response = await jaksimApi.put('/user/password', { password });
  return response;
};

export const getUser = async () => {
  const response = await jaksimApi.get('/user');
  return response;
};
