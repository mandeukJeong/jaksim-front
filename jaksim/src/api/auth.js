import jaksimApi from './index';

export const login = async (email, password) => {
  const response = await jaksimApi.post('/user/login', { email, password });
  return response;
};
