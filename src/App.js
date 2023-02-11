import React, { useEffect, useState } from "react";

import styled, { useTheme } from "styled-components";
import {
  AppContainer,
  CurrentWeatherContainer,
  ForecastContainer,
  H2,
} from "./components/styledComponents";

import SearchBar from "./components/searchBar/";
import ForecastCard from "./components/forecastCard/";
import CurrentWeatherDetails from "./components/currentWeatherDetails/";
import useFetch from "./hooks/useFetch";
// import useGeoLocation from "./hooks/useGeoLocation";
import axios from "axios";

// Local used styled Forecast components
const HourlyForecastContainer = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const HourlyForecastWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.screenSizes.tablet}) {
    width: 100%;
    margin-bottom: 3rem;
    border-bottom: 1px solid #747474;
    padding-bottom: 3rem;
    flex-wrap: wrap;
  }
`;

const DailyForecastContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

function App() {
  const [query, setQuery] = useState("Surrey,CA");
  const [currentWeatherProps, setCurrentWeatherProps] = useState({
    currentTemp: 12,
    timeAndDate: 1234565,
    weatherDesc: "Cloudy",
    feelsLike: 243,
    cityName: "Surrey",
    iconCode: "04n",
  });

  // const { coords, error: geoLocationError } = useGeoLocation();

  // useEffect(() => {
  //   if (coords) {
  //     console.log("Fetch data based on the coords from geolocation");
  //   }
  //   console.log("Running for Cords", coords);
  // }, [coords]);

  // console.log({ coords });

  // const {
  //   data = {
  //     dt: 1687263,
  //     main: { temp: 32, feels_like: 432 },
  //     weather: { description: "Mostly Clouds", icon: "04n" },
  //   },
  //   loading,
  //   error,
  //   // refetch,
  // } = useFetch(
  //   // `https://api.openweathermap.org/data/3.0/weather?p=${query}&appid=f195733492ba878a9a46c9f3b1f9acd7`,
  //   `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=fd3452ba36f31af842ce74adf0af996a`
  // );

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=fd3452ba36f31af842ce74adf0af996a`
      );
      // console.log(res.data);
      const {
        dt: timeAndDate,
        main: { temp: currentTemp, feels_like: feelsLike },
        weather: [{ description: weatherDesc, icon: iconCode }],
        name: cityName,
      } = res.data;

      setCurrentWeatherProps({
        currentTemp,
        timeAndDate,
        weatherDesc,
        feelsLike,
        cityName,
        iconCode,
      });
    };

    getData();
  }, [query]);

  // const {
  //   dt,
  //   main: { temp, feels_like },
  //   weather: { description, icon },
  //   name,
  // } = data;

  // if (data) {
  //  const data);
  // }
  // useEffect(() => {
  //   setCoords(coords);
  //   fetchData(coords);
  // }, [coords]);

  // const fetchData = ({ lat, lon }) => {
  //   console.log({ lat, lon });
  // };

  const { data, loading, refetch } = useFetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=fd3452ba36f31af842ce74adf0af996a`,
    {}
  );

  if (data) {
    const {
      dt: timeAndDate,
      main: { temp: currentTemp, feels_like: feelsLike },
      weather: [{ description: weatherDesc, icon: iconCode }],
      name: cityName,
    } = data;

    setCurrentWeatherProps({
      currentTemp,
      timeAndDate,
      weatherDesc,
      feelsLike,
      cityName,
      iconCode,
    });
  }
  // console.log(data);

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(success, error, options);
  // }, []);

  const error = false;
  // if (loading) return "loading";

  // console.log(query);

  return (
    <AppContainer>
      <CurrentWeatherContainer>
        <SearchBar setQuery={setQuery} />
        {currentWeatherProps && !error && (
          <CurrentWeatherDetails {...currentWeatherProps} />
        )}
      </CurrentWeatherContainer>

      <ForecastContainer>
        <HourlyForecastContainer>Hourly</HourlyForecastContainer>

        <HourlyForecastWrapper>
          <ForecastCard forecastType="hourly" />
          <ForecastCard forecastType="hourly" />
          <ForecastCard forecastType="hourly" />
          <ForecastCard forecastType="hourly" />
        </HourlyForecastWrapper>

        <H2>Daily Forecast</H2>

        <DailyForecastContainer>
          <ForecastCard />
          <ForecastCard />
          <ForecastCard />

          <ForecastCard />
          <ForecastCard />
          <ForecastCard />
        </DailyForecastContainer>
      </ForecastContainer>
    </AppContainer>
  );
}

export default App;
