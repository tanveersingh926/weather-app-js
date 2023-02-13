/* eslint-disable testing-library/no-debugging-utils */
import { render } from "../../utils/test-utils";
import { fireEvent, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchBar from "./index";

import { DEFAULT_CITY } from "../../constants";

const setQuery = jest.fn();
let mockCoords = { lat: 12, lon: 2 };
let mockErrors = null;
let mockLoading = false;

jest.mock("../../hooks/useGeoLocation", () => ({
  __esModule: true,
  default: () => ({
    coords: mockCoords,
    error: mockErrors,
    loading: mockLoading,
  }),
}));

describe("<SearchBar />", () => {
  beforeEach(() => {
    setQuery.mockReset();
    jest.resetAllMocks();
  });

  it("Should trigger setQuery with input value", async () => {
    render(<SearchBar setQuery={setQuery} />);

    await waitFor(() => {
      return screen.findByPlaceholderText("Search City");
    });

    const searchInput = screen.getByPlaceholderText("Search City");
    fireEvent.change(searchInput, { target: { value: DEFAULT_CITY } });
    fireEvent.click(screen.getByRole("button"));

    expect(setQuery).toHaveBeenCalledWith({ q: DEFAULT_CITY });
  });

  it("Should access Geolocation gives success", async () => {
    render(<SearchBar setQuery={setQuery} />);

    await waitFor(() => {
      return screen.findByPlaceholderText("Search City");
    });

    expect(setQuery).toHaveBeenCalledWith(mockCoords);
  });

  it("Should access Geolocation gives error", async () => {
    mockErrors = true;
    mockCoords = null;
    render(<SearchBar setQuery={setQuery} />);

    expect(setQuery).toHaveBeenCalledWith({ q: DEFAULT_CITY });
  });

  it("Should not execute setQuery method if loading is true", async () => {
    mockErrors = true;
    mockCoords = null;
    mockLoading = true;
    render(<SearchBar setQuery={setQuery} />);

    expect(setQuery).not.toHaveBeenCalled();
  });
});
