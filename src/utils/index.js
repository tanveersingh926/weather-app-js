import { DateTime } from "luxon";
import { IMG_BASE_URL } from "../constants/index";

export const formatCurrentWeatherData = (data) => {
  const {
    dt,
    main: { temp: currentTemp, feels_like: feelsLike },
    weather: [{ description: weatherDesc, icon: iconCode }],
    name: cityName,
    coord,
  } = data;

  return {
    weatherDetails: {
      timeAndDate: DateTime.fromMillis(dt * 1000),
      currentTemp,
      feelsLike,
      weatherDesc,
      iconCode,
      cityName,
    },
    coord,
  };
};

export const generateIconUrl = (iconCode) => {
  return `${IMG_BASE_URL}${iconCode}@2x.png`;
};
