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
import { getCurrentWeatherData } from "./services";

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

const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1;
`;

const Loader = styled.span`
  width: 48px;
  height: 48px;
  border: 5px solid #fff;
  border-bottom-color: #ff3d00;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
  position: absolute;
  top: calc(50% - 24px);
  left: calc(50% - 24px);

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

function App() {
  const [query, setQuery] = useState("Surrey,CA");
  const [currentWeatherProps, setCurrentWeatherProps] = useState(null);
  const [dailyForecast, setDailyForecast] = useState([]);
  const [hourlyForecast, setHourlyForecast] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const formattedCurrentWeatherData = async () => {
      const { weatherDetails, error, dailyFormattedData, hourlyFormattedData } =
        await getCurrentWeatherData({
          searchParams: { q: query },
          query,
        });

      if (error) {
        alert("Fetching Failed");
        setLoading(false);
        return;
      }
      setCurrentWeatherProps(weatherDetails);
      setDailyForecast(dailyFormattedData);
      setHourlyForecast(hourlyFormattedData);
      setLoading(false);
    };
    formattedCurrentWeatherData();
  }, [query]);

  const error = false;

  return (
    <>
      {loading && (
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      )}
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
            {hourlyForecast.map((data, index) => {
              return (
                <ForecastCard
                  key={"hourlyForecast" + index}
                  {...data}
                  forecastType="hourly"
                />
              );
            })}
          </HourlyForecastWrapper>

          <H2>Daily Forecast</H2>

          <DailyForecastContainer>
            {dailyForecast.map((data, index) => {
              return <ForecastCard key={"dailyForecast" + index} {...data} />;
            })}
          </DailyForecastContainer>
        </ForecastContainer>
      </AppContainer>
    </>
  );
}

export default App;
