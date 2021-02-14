import axios, { AxiosInstance } from 'axios';
import { getToken } from 'app/components/auth/auth/useAuth';

// Default config options
const defaultOptions = {
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
};

// Create instance
let instance: AxiosInstance = axios.create(defaultOptions);

// Set the AUTH token for any request
instance.interceptors.request.use(async config => {
  const token = await getToken();
  config.headers.Authorization = token || '';
  return config;
});

export default instance;
