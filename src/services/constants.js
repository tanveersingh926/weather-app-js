const BASE_URL = "https://api.openweathermap.org/data";
const APP_ID = "df1b7fb14737dab856f88f9b7517ca3e";

const SERVICES_PATH_KEY = {
  CURRENT_WEATHER: "currentWeather",
  FORECAST: "forecast",
};

const SERVICES_PATH = {
  [SERVICES_PATH_KEY.CURRENT_WEATHER]: "/2.5/weather",
  [SERVICES_PATH_KEY.FORECAST]: "/3.0/onecall",
};

export { BASE_URL, APP_ID, SERVICES_PATH, SERVICES_PATH_KEY };
