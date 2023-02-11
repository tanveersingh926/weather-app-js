import { DateTime } from "luxon";

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
