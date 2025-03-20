import { useState, useEffect } from "react";
import { useWeather } from "../hooks/useWeather";
import { weatherType, weatherImgList } from "../data/WeatherCodeData";

const Background = () => {
  // 초기 배경 이미지 랜덤 선택
  const [backgroundUrl, setBackgroundUrl] = useState(
    weatherImgList.default[Math.floor(Math.random() * weatherImgList.default.length)],
  );

  // context 에서 날씨 정보 가져오기
  const weatherInfo = useWeather();

  // 날씨 정보를 바탕으로 배경화면 선택
  useEffect(() => {
    if (weatherInfo) {
      const weather = weatherInfo.weather[0];
      const weatherCode = weatherType[weather.id as keyof typeof weatherType];
      const weatherImg = weatherImgList[weatherCode as keyof typeof weatherImgList];
      setBackgroundUrl(weatherImg[Math.floor(Math.random() * weatherImg.length)]);
    }
  }, [weatherInfo]);

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
