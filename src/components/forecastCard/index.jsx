import React from "react";
import { imgBaseUrl } from "../../constants/index";
import {
  CardImg,
  CardSubtitle,
  CardTitle,
  CardContainer,
} from "../styledComponents";

interface ForecastCardProps {
  forecastType?: "hourly";
}

function ForecastCard({ forecastType }: ForecastCardProps) {
  return (
    <CardContainer forecastType={forecastType}>
      <CardTitle>Monday</CardTitle>
      <CardImg>
        <img src={imgBaseUrl} alt="weather icon" />
      </CardImg>
      <CardSubtitle>15 C | -3 C</CardSubtitle>
    </CardContainer>
  );
}

export default ForecastCard;
