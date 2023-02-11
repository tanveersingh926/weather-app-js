import axios from "axios";
import { formatCurrentWeatherData } from "../utils";
import { DateTime } from "luxon";
import {
  BASE_URL,
  APP_ID,
  SERVICES_PATH,
  SERVICES_PATH_KEY,
} from "./constants";

const buildServiceUrl = (searchParams, servicePath) => {
  const url = new URL(BASE_URL + SERVICES_PATH[servicePath]);
  url.search = new URLSearchParams({ ...searchParams, appid: APP_ID });
  return url;
};

const fetchViaAxios = async ({ url }) => {
  let data, error;
  try {
    const response = await axios.get(url);
    data = response.data;
  } catch (err) {
    error = err;
    alert("something went wrong");
    console.log("error: ", err);
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
  console.log(url);
  const { data, error } = await fetchViaAxios({ url });

  if (error) return { dailyFormattedData: {}, hourlyFormattedData: {}, error };

  console.log("forecasted Data:", data);

  const timezone = data.timezone;

  const hourlyRawData = data.hourly.slice(0, 4);
  const hourlyFormattedData = hourlyRawData.map(
    ({ dt, temp, weather: [{ icon }] }) => ({
      dateAndTime: DateTime.fromMillis(dt * 1000).setZone(timezone),
      temp,
      iconCode: icon,
    })
  );

  const dailyRawData = data.daily.slice(1, 7);
  const dailyFormattedData = dailyRawData.map(
    ({ dt, temp, weather: [{ icon }] }) => ({
      dateAndTime: DateTime.fromMillis(dt * 1000).setZone(timezone),
      temp: temp.day,
      iconCode: icon,
    })
  );
  console.log({ hourlyFormattedData, dailyFormattedData });

  return { hourlyFormattedData, dailyFormattedData };
  //   const forecastResponse = await axios.get(
  //     `${BASE_URL}3.0/onecall?lat=${coord.lat}&lon=${coord.lon}&exclude=current,minutely&units=metric&appid=${APP_ID}`
  //   );

  //   console.log({ forecastResponse: forecastResponse.data });
};

// export const getCurrentWeatherData = async (searchParams) => {
//   const url = new URL(
//     BASE_URL + SERVICES_PATH[SERVICES_PATH_KEY.CURRENT_WEATHER]
//   );
//   url.search = new URLSearchParams({ ...searchParams, appid: APP_ID });
//   console.log(url);

//   const currentWeatherResponse = await axios.get(
//     `${BASE_URL}/2.5/weather?q=${query}&units=metric&appid=${APP_ID}`
//   );
//   const { weatherDetails, coord } = formatCurrentWeatherData(
//     currentWeatherResponse.data
//   );

//   const forecastResponse = await axios.get(
//     `${BASE_URL}3.0/onecall?lat=${coord.lat}&lon=${coord.lon}&exclude=current,minutely&units=metric&appid=${APP_ID}`
//   );

//   console.log({ forecastResponse: forecastResponse.data });

//   return { weatherDetails, coord };
// };
