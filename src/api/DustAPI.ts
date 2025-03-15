import { instance } from "./APICore";
import { DustInfo } from "../types";

const API_KEY = import.meta.env.VITE_API_DUST_KEY;

export const getDustInfo = async (): Promise<{ data: DustInfo; status: number }> => {
  const params = {
    token: API_KEY,
  };
  try {
    const res = await instance.get("https://api.waqi.info/feed/here/", { params });
    return { data: res.data.data, status: res.data.status };
  } catch (error) {
    console.error(error);
    throw error;
  }
};
