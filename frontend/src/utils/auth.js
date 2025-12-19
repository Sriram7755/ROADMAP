import axios from 'axios';

const API_URL = '13.51.233.242:5001';

export const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/login`, { email, password }, { withCredentials: true });
  return response.data;
};

export const register = async (username, email, password) => {
  const response = await axios.post(`${API_URL}/register`, { username, email, password }, { withCredentials: true });
  return response.data;
};

export const logout = async () => {
  await axios.post(`${API_URL}/logout`, {}, { withCredentials: true });
};

export const checkAuth = async () => {
  const response = await axios.get(`${API_URL}/me`, { withCredentials: true });
  return response.data;
};