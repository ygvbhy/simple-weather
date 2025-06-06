import { useWeather } from "../../hooks/useWeather";

const iconURL = "https://openweathermap.org/img/wn/";

const WeatherComponent = () => {
  const weatherInfo = useWeather();

  const setWeatherMain = () => {
    if (weatherInfo) return weatherInfo.name + ", " + weatherInfo.sys.country;
    else return "";
  };

  const setWeatherTemp = () => {
    if (weatherInfo)
      return weatherInfo.weather[0].main + ", " + Math.round(weatherInfo.main.temp ?? 0) + "°C";
    else return "";
  };

  const setWeatherIcon = () => {
    if (weatherInfo) return `${iconURL}${weatherInfo.weather[0].icon}@2x.png`;
    else return "";
  };

  return weatherInfo ? (
    <div className="flex items-center gap-2">
      <img src={setWeatherIcon()} alt="weatherIcon" />
      <div>
        <div className="text-2xl">{setWeatherTemp()}</div>
        <div>{setWeatherMain()}</div>
      </div>
    </div>
  ) : (
    <div className="text-2xl">Not Found to weather Information...</div>
  );
};

export default WeatherComponent;
