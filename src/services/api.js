import axios from 'axios';

const api = axios.create({
  baseURL: 'https://spotify-jsonserver.herokuapp.com/',
});

export default api;
