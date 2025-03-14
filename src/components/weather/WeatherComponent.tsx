import { useState, useEffect, useCallback } from "react";
import { getWeatherInfo } from "../../api/WeatherAPI";

const WeatherComponent = () => {
  const [location, setLocation] = useState<{ lat: number | null; lon: number | null }>({
    lat: null,
    lon: null,
  });

  // const [weatherInfo, setWeatherInfo] = useState<any>(null);

  const getWeatherInfoData = useCallback(async () => {
    if (location.lat && location.lon) {
      const res = await getWeatherInfo({ lat: location.lat, lon: location.lon });
      console.log(res);
    }
  }, [location]);

  // 위치 정보 받아오기
  useEffect(() => {
    if (!navigator.geolocation) {
      console.error("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      (error) => {
        console.error("Error getting location:", error);
      },
    );
  }, []);

  useEffect(() => {
    getWeatherInfoData();
  }, [getWeatherInfoData, location]);

  return (
    <div>
      <div>{location.lat}</div>
      <div>{location.lon}</div>
    </div>
  );
};

export default WeatherComponent;
