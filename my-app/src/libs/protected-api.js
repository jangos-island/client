import axios from "axios";
import { baseURL } from "../api-config";

const api = axios.create({ baseURL });

function getToken() {
  return `Token ${localStorage.getItem("ji2020")}`;
}

export function gameInit() {
  return api.get("/api/adv/init/", {
    headers: {
      Authorization: getToken()
    }
  });
}

export function move(direction) {
  return api.post(
    "/api/adv/move/",
    { direction },
    {
      headers: {
        Authorization: getToken()
      }
    }
  );
}

export function getRooms() {
  return api.get("/api/adv/rooms/", {
    headers: {
      Authorization: getToken()
    }
  });
}

export function say(msg) {
  return api.post("/api/adv/say/", msg, {
    headers: {
      Authorization: getToken()
    }
  });
}
