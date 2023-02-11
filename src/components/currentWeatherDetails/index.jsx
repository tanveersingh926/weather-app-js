import React from "react";
import styled from "styled-components";
import { WiFog } from "react-icons/wi";
import { WiBarometer } from "react-icons/wi";

const CurrentWeatherWrapper = styled.div`
  text-align: center;
  font-size: 1.2rem;
  border-bottom: 1px solid #6a6a6a;
  padding-bottom: 3rem;
  margin-bottom: 3rem;
`;

const CityName = styled.h1`
  font-size: 3rem;
`;

const CurrentTemp = styled.div`
  font-size: 2rem;
  margin: 3rem 0 1rem 0;
`;
const CurrentTimeAndDay = styled.div`
  font-size: 1.5rem;
`;

const CurrentWeatherDetailsWrapper = styled.div`
  text-align: left;
  font-size: 1.3rem;
  display: flex;
  flex-direction: column;
  padding-left: 2rem;
`;

const CurrentWeatherDetailsItem = styled.div`
  text-align: left;
  font-size: 1.3rem;
  padding: 0.5rem 0;
  text-transform: capitalize;
`;

const WeatherDescIcon = styled(WiFog)`
  margin-right: 1rem;
`;

const FeelsLikeIcon = styled(WiBarometer)`
  margin-right: 1rem;
`;

function CurrentWeatherDetails({
  currentTemp,
  timeAndDate,
  weatherDesc,
  feelsLike,
  cityName,
  iconCode,
}) {
  return (
    <>
      <CurrentWeatherWrapper>
        <CityName>{cityName}</CityName>
        <img
          src={`https://openweathermap.org/img/wn/${iconCode}@2x.png`}
          alt="weather icon"
        />
        <CurrentTemp>{currentTemp.toFixed()}° C</CurrentTemp>
        <CurrentTimeAndDay>
          {timeAndDate.toFormat("cccc '|' hh:mm a")}
        </CurrentTimeAndDay>
      </CurrentWeatherWrapper>

      <CurrentWeatherDetailsWrapper>
        <CurrentWeatherDetailsItem>
          <WeatherDescIcon />
          {weatherDesc}
        </CurrentWeatherDetailsItem>
        <CurrentWeatherDetailsItem>
          <FeelsLikeIcon />
          Feels like {feelsLike.toFixed()}° C
        </CurrentWeatherDetailsItem>
      </CurrentWeatherDetailsWrapper>
    </>
  );
}

export default CurrentWeatherDetails;