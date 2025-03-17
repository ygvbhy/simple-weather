import { createContext } from "react";
import { WeatherContextType } from "../types";

export const WeatherContext = createContext<WeatherContextType | null>(null);
