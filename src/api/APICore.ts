import axios from "axios";

const API_KEY = import.meta.env.VITE_API_WEATHER_KEY;

const request = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
});
console.log(API_KEY);

export { request };
