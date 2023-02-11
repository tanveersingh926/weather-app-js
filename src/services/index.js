// import axios from "axios";
// import { formatCurrentWeatherData } from "../utils";
// const baseUrl = "https://api.openweathermap.org/data/";
// const appid = "fd3452ba36f31af842ce74adf0af996a";

import { getCurrentWeatherData } from "./getCurrentWeatherData";

// export const getWeatherForecastData = async (query) => {
//   const currentWeatherResponse = await axios.get(
//     `${baseUrl}/2.5/weather?q=${query}&units=metric&appid=${appid}`
//   );
//   const { weatherDetails, coord } = formatCurrentWeatherData(
//     currentWeatherResponse.data
//   );

//   const forecastResponse = await axios.get(
//     `${baseUrl}3.0/onecall?lat=${coord.lat}&lon=${coord.lon}&exclude=current,minutely&units=metric&appid=${appid}`
//   );

//   console.log({ forecastResponse: forecastResponse.data });

//   return { weatherDetails, coord };
// };

export { getCurrentWeatherData };
