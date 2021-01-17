import axios, { AxiosRequestConfig } from "axios";

// When developing, points to localhost.
let baseURL = process.env.NODE_ENV === "development" ? "http://localhost:5001/" : "/backend";

const axiosConfig: AxiosRequestConfig = {
  baseURL,
};

const AxiosInstance = axios.create(axiosConfig);

export default AxiosInstance;
