import { useState, useEffect } from "react";
import { useWeather } from "../context/WeatherContext";
import { weatherType } from "../data/WeatherCodeData";

const Background = () => {
  const [backgroundUrl, setBackgroundUrl] = useState("default");
  const weatherInfo = useWeather();

  useEffect(() => {
    if (weatherInfo) {
      const weather = weatherInfo.weather[0];
      setBackgroundUrl(weatherType[weather.id as keyof typeof weatherType]);
    }
  }, [weatherInfo]);

  useEffect(() => {}, []);
  return (
    <div className="absolute top-0 left-0 w-full h-screen">
      <img
        src={`/images/${backgroundUrl}.jpg`}
        alt="background"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Background;
