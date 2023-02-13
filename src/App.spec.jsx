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

// Enable request interception.
beforeAll(() => server.listen());

// Reset handlers so that each test could alter them
// without affecting other, unrelated tests.
afterEach(() => server.resetHandlers());

// Don't forget to clean up afterwards.
afterAll(() => server.close());

describe("<App />", () => {
  it("Should have searchBar component", async () => {
    render(<App />);

    await waitFor(() => {
      return screen.findByText("Surrey");
    });

    expect(screen.getByText("Surrey")).toBeInTheDocument();
  });
});
