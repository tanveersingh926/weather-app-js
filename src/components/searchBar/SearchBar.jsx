import React, { useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import styled from "styled-components";
import PropTypes from "prop-types";
import useFetch from "../../hooks/useFetch";

const SearchContainer = styled.div`
  width: 100%;
  position: relative;
`;
const SearchInput = styled.input`
  width: 100%;
  background: transparent;
  border: 0;
  border-bottom: 2px solid #aeaeae;
  outline-color: transparent;
  color: #fff;
  font-size: 1.4rem;
  padding: 0.5rem;

  &:focus,
  &:focus-visible {
    border: 0;
    border-bottom: 2px solid white;
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
  color: #dbdbdb;
  cursor: pointer;
  font-size: 1.3rem;

  &:hover {
    color: #fff;
  }
`;

function SearchBar({ setQuery }) {
  const searchRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(searchRef.current.value);
    setQuery(searchRef.current.value);
  };

  return (
    <SearchContainer>
      <form onSubmit={onSubmit}>
        <SearchInput placeholder="Search City" type="search" ref={searchRef} />
        <SearchCTA type="submit">
          <AiOutlineSearch />
        </SearchCTA>
      </form>
    </SearchContainer>
  );
}

SearchBar.prototype = {};

export default SearchBar;
