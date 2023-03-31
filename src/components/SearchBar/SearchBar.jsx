import React, { useContext } from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import ThemeContext from "../../context/ThemeContext";

const SearchBarWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 64px;
  background-color: ${props => props.theme === "light" ? "#333" : "#fff"};
  border-radius: 10px;
  padding: 10px 12px;
  input {
    font-size: 18px;
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    padding: 0 10px;
    background-color: ${props => props.theme === "light" ? "#333" : "#fff"};
    color: ${props => props.theme === "light" ? "#fff" : "#333"};
    &::placeholder {
      color: ${props => props.theme === "light" ? "#fff" : "#333"};
    }
  }
  svg {
    position: absolute;
    right: 26px;
    top: 20px;
    font-size: 26px;
    cursor: pointer;
    border: none;
    color: ${props => props.theme === "light" ? "#fff" : "#333"};
  }
`;

const SearchBar = ({ handleSearch }) => {
    const { theme } = useContext(ThemeContext);
  return (
    <SearchBarWrapper theme={theme}>
      <input onChange={handleSearch} placeholder="Type your favorite snippet here, hehehe ....." />
      <BiSearch />
    </SearchBarWrapper>
  );
};

export default SearchBar;
