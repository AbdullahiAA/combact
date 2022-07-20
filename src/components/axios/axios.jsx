import Axios from "axios";

const { REACT_APP_BASE_URL } = process.env;

const defaultOptions = {
  baseURL: REACT_APP_BASE_URL,
  headers: { "Content-Type": "application/json; multipart/form-data" },
};

const axios = Axios.create(defaultOptions);

// Set the AUTH token for any request
axios.interceptors.request.use((config) => {
  // Get the token from the localStorage
  const token = JSON.parse(localStorage.getItem("token"));

  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default axios;
