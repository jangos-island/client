import axios from "axios";

const baseURL = "https://jango-island-production.herokuapp.com";
const api = axios.create({ baseURL });

export function login(data) {
  return api.post("/api/login/", data);
}

export function register(data) {
  return api.post("/api/registration/", data);
}
