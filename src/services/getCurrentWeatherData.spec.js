import { DEFAULT_CITY } from "../constants";
import server from "../mocks/server";
import { getCurrentWeatherData } from "./getCurrentWeatherData";

const dailyFormattedForecast = {
  dateAndTime: "2023-02-12T12:00:00.000-08:00",
  temp: 4.36,
  iconCode: "10d",
};

describe("getCurrentWeatherData", () => {
  beforeAll(() => server.listen());

  afterEach(() => server.resetHandlers());

  afterAll(() => server.close());

  it("formats data with city name", async () => {
    const { weatherDetails, error, dailyFormattedData, hourlyFormattedData } =
      await getCurrentWeatherData({
        searchParams: { q: DEFAULT_CITY },
      });

    expect(error).toBeFalsy();
    expect(dailyFormattedData).toHaveLength(6);
    expect(JSON.stringify(dailyFormattedData[0])).toEqual(
      JSON.stringify(dailyFormattedForecast)
    );
    expect(hourlyFormattedData).toHaveLength(4);
    expect(weatherDetails.cityName).toEqual("Surrey");
  });
});
