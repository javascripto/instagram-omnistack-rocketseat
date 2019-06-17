import axios from 'axios';

export const baseURL = (window.location.hostname === 'localhost')
  ? 'http://localhost:3333'
  : 'https://instagram-rocketseat.herokuapp.com';

const api = axios.create({ baseURL });

export default api;
