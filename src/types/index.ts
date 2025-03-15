export interface LocationInfo {
  lat: number;
  lon: number;
}

export interface WeatherInfo {
  base: string;
  clouds: {
    all: number;
  };
  cod: number;
  cord: {
    lat: number;
    lon: number;
  };
  dt: number;
  id: number;
  main: {
    feels_like: number;
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  name: string;
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  visibility: number;
  weather: Weather[];
  wind: {
    deg: number;
    gust: number;
    speed: number;
  };
}

export interface Weather {
  description: string;
  icon: string;
  id: number;
  main: string;
}
