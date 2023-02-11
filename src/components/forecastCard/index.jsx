import React from "react";
import {
  CardImg,
  CardSubtitle,
  CardTitle,
  CardContainer,
} from "../styledComponents";

function ForecastCard({ forecastType, dateAndTime, temp, iconCode }) {
  return (
    <CardContainer forecastType={forecastType}>
      <CardTitle>{dateAndTime && dateAndTime.toFormat("cccc")}</CardTitle>
      <CardImg>
        <img
          src={`https://openweathermap.org/img/wn/${iconCode}@2x.png`}
          alt="weather icon"
        />
      </CardImg>
      <CardSubtitle>
        {temp.toFixed() + "° C"}
        {/* {temp && temp?.day?.toFixed() + "° C |"}{" "} */}
        {/* {temp && temp?.night?.toFixed() + "° C"} */}
      </CardSubtitle>
    </CardContainer>
  );
}

export default ForecastCard;
