import { instance } from "./APICore";
import { LocationInfo, WeatherInfo } from "../types";

const API_KEY = import.meta.env.VITE_API_WEATHER_KEY;

export const getWeatherInfo = async (locationInfo: LocationInfo): Promise<WeatherInfo> => {
  const params = {
    lat: locationInfo.lat,
    lon: locationInfo.lon,
    appid: API_KEY,
    units: "metric",
  };
  try {
    const res = await instance.get("https://api.openweathermap.org/data/2.5/weather", { params });
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
