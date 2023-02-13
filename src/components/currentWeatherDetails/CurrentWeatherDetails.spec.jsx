/* eslint-disable testing-library/no-debugging-utils */
import { render } from "../../utils/test-utils";
import { fireEvent, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import CurrentWeatherDetails from "./index";
import { DateTime } from "luxon";
import { DEFAULT_CITY } from "../../constants";

const setQuery = jest.fn();
let mockCoords = { lat: 12, lon: 2 };
let mockErrors = null;
let mockLoading = false;

const CurrentWeatherDetailsProps = {
  currentTemp: 4.1,
  timeAndDate: DateTime.fromMillis(1676266846 * 1000),
  weatherDesc: "Overcast Clouds",
  feelsLike: 3.2,
  cityName: DEFAULT_CITY,
  iconCode: "04n",
};

describe("<CurrentWeatherDetailsProps />", () => {
  beforeEach(() => {
    setQuery.mockReset();
    jest.resetAllMocks();
  });

  it("Should render component with all values", async () => {
    render(<CurrentWeatherDetails {...CurrentWeatherDetailsProps} />);

    // screen.debug();
    const currentTempEl = screen.getByTestId(
      "currentWeatherDetails__current-temp"
    );
    const timeAndDateEl = screen.getByTestId(
      "currentWeatherDetails__time-date"
    );
    const weatherDescEl = screen.getByTestId(
      "currentWeatherDetails__weather-desc"
    );
    const feelsLikeEl = screen.getByTestId("currentWeatherDetails__feels-like");
    const cityNameEl = screen.getByTestId("currentWeatherDetails__city-name");
    const iconCodeEl = screen.getByTestId("currentWeatherDetails__icon-code");

    screen.debug();
    expect(currentTempEl.textContent).toEqual("4° C");
    expect(timeAndDateEl.textContent).toEqual("Sunday | 09:40 PM");
    expect(weatherDescEl.textContent).toEqual(
      CurrentWeatherDetailsProps.weatherDesc
    );
    expect(feelsLikeEl.textContent).toEqual("Feels like 3° C");
  });
});
