import React, { useContext } from "react";
import styled from "styled-components";
// import menuImage from "../../assets/menu.png";
import { GiHamburgerMenu } from "react-icons/gi"
import ThemeContext from "../../../context/ThemeContext";
import { Link } from "react-router-dom";

const SeeMoreButtonWrapper = styled.div`
  width: 165px;
  height: 44px;

  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
  &:hover{
    background-color: ${props => props.theme === "light" ? "#444" : "#d3d3d3"};
  }
  background-color: ${props => props.theme === "light" ? "#333" : "#fff"};
  color: ${props => props.theme === "light" ? "#fff" : "#333"};
  img {
    width: 14px;
    height: 14px;
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 26px;
    letter-spacing: 1px;
  }
`;

const SeeMoreButton = ({ url }) => {
    const { theme } = useContext(ThemeContext)
  return (
    <Link to={url}>
      <SeeMoreButtonWrapper theme={theme}>
      <GiHamburgerMenu />
      <p>See More</p>
    </SeeMoreButtonWrapper>
    </Link>
  );
};

export default SeeMoreButton;
