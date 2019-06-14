import axios from 'axios';

export const baseURL = (window.location.hostname === 'localhost')
  ? 'http://localhost:3333'
  : 'https://70b898c2.ngrok.io';

const api = axios.create({ baseURL });

export default api;
