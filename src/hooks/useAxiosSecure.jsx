import axios from "axios";
import { useAuth } from "./useAuth";

const useAxiosSecure = () => {
  const { user } = useAuth();
  const token = localStorage.getItem("token") || user?.token;

  const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 30000,
  });

  axiosSecure.interceptors.request.use((config) => {
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  return axiosSecure;
};

export default useAxiosSecure;
