import React, { useEffect, useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import styled from "styled-components";
import PropTypes from "prop-types";
import useGeoLocation from "../../hooks/useGeoLocation";
import { DEFAULT_CITY } from "../../constants";

const SearchContainer = styled.div`
  width: 100%;
  position: relative;
`;
const SearchInput = styled.input`
  width: 100%;
  background: transparent;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme.borders.lightGray};
  outline-color: transparent;
  color: ${(props) => props.theme.textColors.primary};
  font-size: 1.4rem;
  padding: 0.5rem;

  &:focus,
  &:focus-visible {
    border: 0;
    border-bottom: 2px solid ${(props) => props.theme.textColors.primary};
    outline-color: transparent;
    outline-width: 0;
  }
`;
const SearchCTA = styled.button`
  all: unset;
  position: absolute;
  right: 0.5rem;
  top: 1rem;
  text-align: center;
  color: ${(props) => props.theme.textColors.secondary};
  cursor: pointer;
  font-size: 1.3rem;

  &:hover {
    color: ${(props) => props.theme.textColors.primary};
  }
`;

function SearchBar({ setQuery }) {
  const searchRef = useRef();
  const { coords, error, loading } = useGeoLocation();

  useEffect(() => {
    if (loading) return;
    setQuery(coords && !error ? coords : { q: DEFAULT_CITY });
  }, [coords, error, loading]);

  const onSubmit = (e) => {
    e.preventDefault();
    const searchValue = searchRef.current.value;
    if (!searchValue) {
      alert("Please enter the city name.");
    } else {
      setQuery({ q: searchRef.current.value });
    }
  };

  return (
    <SearchContainer>
      <form onSubmit={onSubmit}>
        <SearchInput placeholder="Search City" type="search" ref={searchRef} />
        <SearchCTA type="submit" role="button">
          <AiOutlineSearch />
        </SearchCTA>
      </form>
    </SearchContainer>
  );
}

SearchBar.propTypes = {
  setQuery: PropTypes.func.isRequired,
};

export default SearchBar;
