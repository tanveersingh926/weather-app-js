import React, { useCallback, useEffect, useState } from "react";

import styled from "styled-components";
import {
  AppContainer,
  CurrentWeatherContainer,
  ForecastContainer,
  H2,
  Loader,
  LoaderContainer,
} from "./components/styledComponents";

import SearchBar from "./components/searchBar/";
import ForecastCard from "./components/forecastCard/";
import CurrentWeatherDetails from "./components/currentWeatherDetails/";
import { getCurrentWeatherData } from "./services";

// Locally used styled  components
const HourlyForecastContainer = styled.div`
  font-size: ${(props) => props.theme.fontSize.smallerHeading};
  font-weight: ${(props) => props.theme.fontWeight.semibold};
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
    border-bottom: 1px solid ${(props) => props.theme.borders.lightGray};
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
  const [query, setQuery] = useState(null);
  const [currentWeatherProps, setCurrentWeatherProps] = useState(null);
  const [dailyForecast, setDailyForecast] = useState([]);
  const [hourlyForecast, setHourlyForecast] = useState([]);
  const [loading, setLoading] = useState(true);
  const setQueryWithUseCallback = useCallback(
    (newQuery) => {
      setQuery(newQuery);
    },
    [setQuery]
  );

  useEffect(() => {
    if (!query) return;

    setLoading(true);
    const formattedCurrentWeatherData = async () => {
      const { weatherDetails, error, dailyFormattedData, hourlyFormattedData } =
        await getCurrentWeatherData({
          searchParams: query,
        });

      if (error) {
        alert("Something went wrong. Please try again.");
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

  return (
    <>
      {loading && (
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      )}
      <AppContainer>
        <CurrentWeatherContainer>
          <SearchBar setQuery={setQueryWithUseCallback} />
          {currentWeatherProps && (
            <CurrentWeatherDetails {...currentWeatherProps} />
          )}
        </CurrentWeatherContainer>

        <ForecastContainer>
          <HourlyForecastContainer>Hourly</HourlyForecastContainer>

          <HourlyForecastWrapper>
            {hourlyForecast.map((forecastItem, index) => {
              return (
                <ForecastCard
                  key={"hourlyForecast" + index}
                  {...forecastItem}
                  isHourlyForecast={true}
                />
              );
            })}
          </HourlyForecastWrapper>

          <H2>Daily Forecast</H2>

          <DailyForecastContainer>
            {dailyForecast.map((forecastItem, index) => {
              return (
                <ForecastCard key={"dailyForecast" + index} {...forecastItem} />
              );
            })}
          </DailyForecastContainer>
        </ForecastContainer>
      </AppContainer>
    </>
  );
}

export default App;
