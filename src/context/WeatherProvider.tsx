import { useState, useEffect, useCallback } from "react";
import { WeatherInfo, DustInfo } from "../types";
import { getWeatherInfo } from "../api/WeatherAPI";
import { WeatherContext } from "./WeatherContext";
import { getDustInfo } from "../api/DustAPI";

export const WeatherProvider = ({ children }: { children: React.ReactNode }) => {
  const [weatherInfo, setWeatherInfo] = useState<WeatherInfo | null>(null);
  const [dustInfo, setDustInfo] = useState<{ data: DustInfo; status: number } | null>(null);

  const fetchDustInfo = async () => {
    console.log("Dust Info Reloded");

    const dustInfoData: { data: DustInfo; status: number } = await getDustInfo();
    if (dustInfoData) setDustInfo(dustInfoData);
  };

  const getLocationInfo = () => {
    console.log("Weather Reloaded");

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
  };

  const getDataSet = useCallback(() => {
    getLocationInfo();
    fetchDustInfo();
  }, []);

  useEffect(() => {
    getDataSet();

    const now = new Date();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const milliseconds = now.getMilliseconds();

    // 다음 정각까지 남은시간 (ms) 계산
    const timeUntilNextHour = (60 - minutes) * 60 * 1000 - seconds * 1000 - milliseconds;

    // 정각에 실행 후, 매시간마다 실행되도록 설정
    const timeOut = setTimeout(() => {
      getDataSet();

      // 이후 1시간마다 실행되는 interval 설정
      const interval = setInterval(getLocationInfo, 36000000);

      return () => clearInterval(interval);
    }, timeUntilNextHour);

    return () => clearTimeout(timeOut);
  }, [getDataSet]);

  return (
    <WeatherContext.Provider value={{ weatherInfo, dustInfo }}>{children}</WeatherContext.Provider>
  );
};
