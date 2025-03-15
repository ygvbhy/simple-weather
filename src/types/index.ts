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

export interface DustInfo {
  aqi: number;
  attributions: Attributions[];
  city: City;
  dominentpol: string;
  iaqi: Iaqi;
  time: Time;
}

interface Attributions {
  url: string;
  name: string;
  logo: string;
}

interface City {
  name: string;
  url: string;
  location: string;
  geo: number[];
}

interface Iaqi {
  co: V;
  h: V;
  no2: V;
  o3: V;
  p: V;
  pm10: V;
  pm25: V;
  so2: V;
  idx: number;
}

interface V {
  v: number;
}

export interface Time {
  s: string;
  tz: string;
  v: number;
  iso: string;
}
