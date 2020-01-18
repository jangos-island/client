import axios from "axios";
import { baseURL } from '../api-config'

const api = axios.create({ baseURL });

export function login(data) {
  return api.post("/api/login/", data);
}

export function register(data) {
  return api.post("/api/registration/", data);
}
