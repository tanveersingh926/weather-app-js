/* eslint-disable testing-library/no-debugging-utils */
import App from "./App";
import { render } from "./utils/test-utils";
import { screen, waitFor } from "@testing-library/react";
import server from "./mocks/server";

let mockCoords = { lat: 12, lon: 2 };
let mockErrors = null;
let mockLoading = false;

jest.mock("./hooks/useGeoLocation", () => ({
  __esModule: true,
  default: () => ({
    coords: mockCoords,
    error: mockErrors,
    loading: mockLoading,
  }),
}));

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe("<App />", () => {
  it("Should render", async () => {
    render(<App />);

    await waitFor(() => {
      return screen.findByText("Surrey");
    });

    expect(screen.getByText("Surrey")).toBeInTheDocument();
  });
});
