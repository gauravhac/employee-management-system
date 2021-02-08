import config from "../config";
import axios from "axios";

const service = new axios.create({
  baseURL: config.API_BASE_URL,
  timeout: 120000,
});

const requestHandler = (request) => {
  var token = localStorage.getItem("__token__");
  if (token) {
    request.headers.Authorization = `bearer ${token}`;
  }
  return request;
};

const errorHandler = (error) => {
  const response = {
    msg: error,
    error: true,
  };
  return response;
};

service.interceptors.request.use((request) => requestHandler(request));

export default {
  service: service,
};
