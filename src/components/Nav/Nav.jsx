import React, { useContext, useState } from "react";
import ThemeContext from "../../context/ThemeContext";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  background-color: ${(props) => (props.theme === "light" ? "#fff" : "#333")};
  color: ${(props) => (props.theme === "light" ? "#333" : "#fff")};
  height: 128px;
  border-bottom: 1px solid
    ${(props) => (props.theme === "light" ? "#E2E2E2" : "#4D4D4D")};
  .inner {
    width: 100%;
    max-width: 1140px;
    display: flex;
    align-items: center;
    margin: 0 auto;
  }
  h1 {
    margin-right: auto;
    a {
      color: ${(props) => (props.theme === "light" ? "#333" : "#fff")};
    }
  }
  ul {
    display: flex;
    gap: 1rem;
    list-style: none;
    margin: 0;
    padding: 0;
    @media (max-width: 768px) {
      display: none;
      flex-direction: column;
      position: absolute;
      top: 128px;
      left: 0;
      width: 100%;
      background-color: ${(props) =>
        props.theme === "light" ? "#fff" : "#333"};
      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
      z-index: 999;
    }
    li {
      margin: auto;
      @media (max-width: 768px) {
        margin: 0;
      }
      a {
        text-decoration: none;
        color: ${(props) => (props.theme === "light" ? "#333" : "#fff")};
        @media (max-width: 768px) {
          display: block;
          padding: 1rem 2rem;
        }
      }
    }
  }
  button {
    margin: 1rem;
    padding: 0.55rem 1.2rem;
    border: none;
    border-radius: 4px;
    background-color: ${(props) => (props.theme === "light" ? "#333" : "#fff")};
    color: ${(props) => (props.theme === "light" ? "#fff" : "#333")};
    @media (max-width: 768px) {
      margin-left: auto;
      margin: 0;
    }
  }
`;
const Nav = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <NavContainer theme={theme}>
      <div className="inner">
        <h1>
          <Link to={"/"}>Pedro</Link>
        </h1>
        <ul style={{ display: showMenu ? "flex" : "none" }}>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/snippet"}>Snippet</Link>
          </li>
          <li>
            <Link to={"/portfolio"}>Portfolio</Link>
          </li>
          <button onClick={toggleTheme}>
            {theme === "light" ? "Dark" : "Light"}
          </button>
        </ul>
        <button onClick={toggleMenu}>Menu</button>
      </div>
    </NavContainer>
  );
};
export default Nav;
