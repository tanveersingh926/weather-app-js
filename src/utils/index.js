import { DateTime } from "luxon";
import { FORECAST_TYPE, IMG_BASE_URL } from "../constants/index";

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

const formatIndividualForecastItem = ({
  dt,
  temp,
  weather: [{ icon }],
  timezone,
  forecastType,
}) => ({
  dateAndTime: DateTime.fromMillis(dt * 1000).setZone(timezone),
  temp: forecastType === FORECAST_TYPE.HOURLY ? temp : temp.day,
  iconCode: icon,
});

export const formatDailyHourlyData = (forecastData) => {
  const timezone = forecastData.timezone;

  const hourlyRawData = forecastData.hourly.slice(1, 5);
  const hourlyFormattedData = hourlyRawData.map((item) =>
    formatIndividualForecastItem({
      ...item,
      timezone,
      forecastType: FORECAST_TYPE.HOURLY,
    })
  );

  const dailyRawData = forecastData.daily.slice(0, 6);
  const dailyFormattedData = dailyRawData.map((item) =>
    formatIndividualForecastItem({
      ...item,
      timezone,
    })
  );
  return { hourlyFormattedData, dailyFormattedData };
};
