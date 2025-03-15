import { useState, useEffect } from "react";
import { WeatherInfo } from "../types";
import { getWeatherInfo } from "../api/WeatherAPI";
import { WeatherContext } from "./WeatherContext";

export const WeatherProvider = ({ children }: { children: React.ReactNode }) => {
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
