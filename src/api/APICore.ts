import axios, { AxiosRequestConfig } from "axios";

const API_URL = import.meta.env.VITE_API_WEATHER_URL;

const create = (baseURL: string, options: AxiosRequestConfig) => {
  const instance = axios.create(Object.assign({ baseURL }, options));
  return instance;
};

export const instance = create(API_URL, {});
