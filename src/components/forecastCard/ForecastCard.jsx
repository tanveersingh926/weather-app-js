import React from "react";
import PropTypes from "prop-types";
import {
  CardImg,
  CardSubtitle,
  CardTitle,
  CardContainer,
} from "../styledComponents";
import { generateIconUrl } from "../../utils";

function ForecastCard({ forecastType, dateAndTime, temp, iconCode }) {
  return (
    <CardContainer forecastType={forecastType}>
      <CardTitle>{dateAndTime && dateAndTime.toFormat("cccc")}</CardTitle>
      <CardImg>
        <img src={generateIconUrl(iconCode)} alt="Weather" />
      </CardImg>
      <CardSubtitle>{temp.toFixed() + "° C"}</CardSubtitle>
    </CardContainer>
  );
}

ForecastCard.propTypes = {
  forecastType: PropTypes.string,
  dateAndTime: PropTypes.instanceOf(Date).isRequired,
  temp: PropTypes.number.isRequired,
  iconCode: PropTypes.string.isRequired,
};

export default ForecastCard;
