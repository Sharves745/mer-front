import axios from "axios";

const api = axios.create({
  baseURL: "http://13.233.154.102:5000/api"
});

export default api;
