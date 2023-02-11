const BASE_URL = "https://api.openweathermap.org/data";
const APP_ID = "fd3452ba36f31af842ce74adf0af996a";

const SERVICES_PATH_KEY = {
  CURRENT_WEATHER: "currentWeather",
  FORECAST: "forecast",
};

const SERVICES_PATH = {
  [SERVICES_PATH_KEY.CURRENT_WEATHER]: "/2.5/weather",
  [SERVICES_PATH_KEY.FORECAST]: "/3.0/onecall",
};

export { BASE_URL, APP_ID, SERVICES_PATH, SERVICES_PATH_KEY };
