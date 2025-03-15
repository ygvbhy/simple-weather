import { createContext } from "react";
import { WeatherInfo } from "../types";

export const WeatherContext = createContext<WeatherInfo | null>(null);
