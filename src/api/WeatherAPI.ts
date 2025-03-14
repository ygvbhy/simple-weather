import { instance } from "./APICore";
import { LocationInfo } from "../types";

const API_KEY = import.meta.env.VITE_API_WEATHER_KEY;

export const getWeatherInfo = async (locationInfo: LocationInfo) => {
  const params = {
    lat: locationInfo.lat,
    lon: locationInfo.lon,
    appid: API_KEY,
  };
  const res = await instance.get("", { params });

  return res;
};
