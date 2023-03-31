import React, { useContext } from 'react'
import ThemeContext from '../../context/ThemeContext'
import styled from "styled-components";
import { Link } from "react-router-dom"

const NavContainer = styled.nav`
    display: flex;
    align-items:center;
    padding: 1rem 2rem;
    background-color: ${props => props.theme === "light" ? "#fff" : "#333"};
    color: ${props => props.theme === "light" ? "#333" : "#fff"};
    height: 128px;
    border-bottom: 1px solid ${props => props.theme === "light" ? "#E2E2E2" : "#4D4D4D"};
    .inner{
        width: 1140px;
        display: flex;
        align-items:center;
        // padding: 1rem 2rem;
        margin: 0 auto;
    }
    h1{
        margin-right: auto;
        a{
            color: ${props => props.theme === "light" ? "#333" : "#fff"};
        }
    }
    ul{
        list-style: none;
        display: flex;
        gap: 1rem;
        li{
            a{
                text-decoration: none;
                color: ${props => props.theme === "light" ? "#333" : "#fff"};
            }
        }
    }
    button{
        margin-left: 1rem;
        padding: 0.55rem 1.2rem;
        border:none;
        border-radius: 4px;
        background-color: ${props => props.theme === "light" ? "#333" : "#fff"};
        color: ${props => props.theme === "light" ? "#fff" : "#333"};
    }
`;

const Nav = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <NavContainer theme={theme}>
        <div className='inner'>
        <h1><Link to={"/"}>Pedro</Link></h1>
        <ul>
            <li>
                <Link to={"/"}>Home</Link>
            </li>
            <li>
                <Link to={"/snippet"}>Snippet</Link>
            </li>
            <li>
                <Link to={"/portfolio"}>Portfolio</Link>
            </li>
        </ul>
        <button onClick={toggleTheme}>{theme === "light" ? "Dark" : "Light"}</button>
        </div>
    </NavContainer>
  )
}

export default Nav