import axios from "axios";
import { baseURL } from "../api-config";

const api = axios.create({ baseURL });
api.defaults.headers.common["Authorization"] = getToken();

function getToken() {
  return `Token ${localStorage.getItem("ji2020")}`;
}

export function gameInit() {
  return api.get("/api/adv/init/");
}

export function move(direction) {
  return api.post("/api/adv/move/", { direction });
}

export function getRooms() {
  return api.get("/api/adv/rooms/");
}
