import Axios, { AxiosInstance } from "axios";

export const httpClientTago: AxiosInstance = Axios.create({
  baseURL: "https://api.tago.io",
});
