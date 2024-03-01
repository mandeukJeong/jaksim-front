import axios from 'axios';

const jaksimApi = axios.create({
  withCredentials: true,
});

export default jaksimApi;
