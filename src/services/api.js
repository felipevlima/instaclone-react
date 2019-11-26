import axios from 'axios';

const api = axios.create({
  baseURL: 'https://instagramclone-backend.herokuapp.com',
});

export default api;