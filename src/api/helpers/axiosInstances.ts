import axios from "axios";

export const axiosWithHeaders = axios.create({
  headers: { "Content-Type": "application/json" },
});

export const axiosPrivate = axios.create({
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
