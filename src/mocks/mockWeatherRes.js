export const mockRes = {
  coord: { lon: -122.8251, lat: 49.1064 },
  weather: [
    { id: 804, main: "Clouds", description: "overcast clouds", icon: "04n" },
  ],
  base: "stations",
  main: {
    temp: 5.6,
    feels_like: 2.34,
    temp_min: 4.54,
    temp_max: 7.81,
    pressure: 1011,
    humidity: 96,
  },
  visibility: 10000,
  wind: { speed: 4.47, deg: 150, gust: 8.49 },
  clouds: { all: 100 },
  dt: 1676266846,
  sys: {
    type: 2,
    id: 2003879,
    country: "CA",
    sunrise: 1676215529,
    sunset: 1676251546,
  },
  timezone: -28800,
  id: 6159905,
  name: "Surrey",
  cod: 200,
};

export default mockRes;
