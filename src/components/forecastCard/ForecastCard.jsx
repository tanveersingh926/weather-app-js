import React from "react";
import PropTypes from "prop-types";
import {
  CardImg,
  CardSubtitle,
  CardTitle,
  CardContainer,
} from "../styledComponents";
import { generateIconUrl } from "../../utils";
import { DateTime } from "luxon";

function ForecastCard({
  isHourlyForecast = false,
  dateAndTime,
  temp,
  iconCode,
}) {
  return (
    <CardContainer isHourlyForecast={isHourlyForecast}>
      <CardTitle>
        {dateAndTime &&
          dateAndTime.toFormat(isHourlyForecast ? "hh:mm a" : "cccc")}
      </CardTitle>
      <CardImg>
        <img src={generateIconUrl(iconCode)} alt="Weather" />
      </CardImg>
      <CardSubtitle>{temp.toFixed() + "° C"}</CardSubtitle>
    </CardContainer>
  );
}

ForecastCard.propTypes = {
  isHourlyForecast: PropTypes.bool,
  dateAndTime: PropTypes.instanceOf(DateTime).isRequired,
  temp: PropTypes.number.isRequired,
  iconCode: PropTypes.string.isRequired,
};

export default ForecastCard;
