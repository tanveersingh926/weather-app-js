import axios from "axios";
import { formatCurrentWeatherData, formatDailyHourlyData } from "../utils";
import {
  BASE_URL,
  APP_ID,
  SERVICES_PATH,
  SERVICES_PATH_KEY,
} from "./constants";

const buildServiceUrl = (searchParams, servicePath) => {
  const url = new URL(BASE_URL + SERVICES_PATH[servicePath]);
  url.search = new URLSearchParams({
    ...searchParams,
    appid: APP_ID,
    units: "metric",
  });
  return url;
};

const fetchViaAxios = async ({ url }) => {
  let data, error;
  try {
    const response = await axios.get(url);
    data = response.data;
  } catch (err) {
    error = err;
    console.log("error:", err);
  }
  return { data, error };
};

export const getCurrentWeatherData = async ({ searchParams }) => {
  const url = buildServiceUrl(searchParams, SERVICES_PATH_KEY.CURRENT_WEATHER);

  const { data, error } = await fetchViaAxios({ url });

  if (error) return { weatherDetails: {}, coord: {}, error };

  const { weatherDetails, coord } = formatCurrentWeatherData(data);
  const {
    dailyFormattedData,
    hourlyFormattedData,
    error: forecastServiceError,
  } = await getForecastWeatherData({ searchParams: { ...coord } });

  return {
    weatherDetails,
    coord,
    error: error || forecastServiceError ? true : false,
    dailyFormattedData,
    hourlyFormattedData,
  };
};

export const getForecastWeatherData = async ({ searchParams }) => {
  const url = buildServiceUrl(
    { ...searchParams, exclude: "current,minutely", units: "metric" },
    SERVICES_PATH_KEY.FORECAST
  );
  const { data, error } = await fetchViaAxios({ url });

  if (error) return { dailyFormattedData: {}, hourlyFormattedData: {}, error };

  const formattedForecastData = formatDailyHourlyData(data);

  return { ...formattedForecastData, error };
};
