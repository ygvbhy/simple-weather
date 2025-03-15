import { createContext, useState, useEffect, useContext } from "react";
import { WeatherInfo } from "../types";
import { getWeatherInfo } from "../api/WeatherAPI";

const WeatherContext = createContext<WeatherInfo | null>(null);

export const WeatherContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [weatherInfo, setWeatherInfo] = useState<WeatherInfo | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      console.error("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const res = await getWeatherInfo({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
        setWeatherInfo(res);
      },
      (error) => {
        console.error("Error getting location:", error);
      },
    );
  }, []);

  return <WeatherContext.Provider value={weatherInfo}>{children}</WeatherContext.Provider>;
};

export const useWeather = () => {
  return useContext(WeatherContext);
  // if (!context) {
  // throw new Error("useWeather must be used within a WeatherContextProvider");
  // }
  // return context;
};
