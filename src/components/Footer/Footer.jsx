import React, { useContext } from 'react'
import styled from 'styled-components'
import ThemeContext from '../../context/ThemeContext';
import { Link } from "react-router-dom"
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';


const FooterContainer = styled.footer`
    height: 278px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items:center;
    background-color: ${props => props.theme === "light" ? "#fff" : "#333"};
    color: ${props => props.theme === "light" ? "#333" : "#fff" };
    border-top: 1px solid ${props => props.theme === "light" ? "#E2E2E2" : "#4D4D4D"};
    ul{
        display: flex;
        list-style: none;
        gap: 1rem;
        li{
            a{
                color: ${props => props.theme === "light" ? "#333" : "#fff" };
            }
        }
    }
    h5{
        margin-top: 3rem;
        margin-bottom: 1rem;
        
    }
`;

const RowWrapper = styled.div`
    display: flex;
    gap: 24px;
    a{
        color: ${props => props.theme === "light" ? "#333" : "#fff" };
    }
    svg{
        font-size: 30px;
        margin-bottom: 2.2rem;
    }
`

const Footer = () => {
    const { theme } = useContext(ThemeContext)
  return (
    <FooterContainer theme={theme}>
        <ul>
            <li>
                <Link>Docs</Link>
            </li>
            <li>
                <Link>Book Notes</Link>
            </li>
            <li>
                <Link>Polywork</Link>
            </li>
            <li>
                <Link>Starter Template</Link>
            </li>
            <li>
                <Link>Statistics</Link>
            </li>
        </ul>
        <h5>Reach me out</h5>
        <RowWrapper theme={theme}>
            <a href="https://github.com/Hiroki-Miyasaka" target='_blank'><AiFillGithub /></a>
            <a href=""><AiFillLinkedin /></a>
            <a href=""><AiOutlineTwitter /></a>
        </RowWrapper>
    </FooterContainer>
  )
}

export default Footer