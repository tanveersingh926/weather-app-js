import React from "react";
import styled from "styled-components";
import { WiFog } from "react-icons/wi";
import { WiBarometer } from "react-icons/wi";
import { generateIconUrl } from "../../utils";
import { DATE_TIME_FORMAT } from "../../constants";
import PropTypes from "prop-types";

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
        <img src={generateIconUrl(iconCode)} alt={weatherDesc} />
        <CurrentTemp>{currentTemp.toFixed()}° C</CurrentTemp>
        <CurrentTimeAndDay>
          {timeAndDate.toFormat(DATE_TIME_FORMAT)}
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

CurrentWeatherDetails.propTypes = {
  currentTemp: PropTypes.number.isRequired,
  timeAndDate: PropTypes.instanceOf(Date).isRequired,
  weatherDesc: PropTypes.string.isRequired,
  feelsLike: PropTypes.number.isRequired,
  cityName: PropTypes.string.isRequired,
  iconCode: PropTypes.string.isRequired,
};

export default CurrentWeatherDetails;
