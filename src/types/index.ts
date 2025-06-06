export interface WeatherContextType {
  weatherInfo: WeatherInfo | null;
  dustInfo: {
    data: DustInfo;
    status: number;
  } | null;
}

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
  co: VType;
  h: VType;
  no2: VType;
  o3: VType;
  p: VType;
  pm10: VType;
  pm25: VType;
  so2: VType;
  idx: number;
}

interface VType {
  v: number;
}

interface Time {
  s: string;
  tz: string;
  v: number;
  iso: string;
}

export interface BookMark {
  id: number;
  name: string;
  url: string;
}
