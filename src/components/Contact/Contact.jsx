import React, { useContext } from "react";
import styled from "styled-components";
import { GrInstagram } from "react-icons/gr"
import { FiTwitter, FiFacebook } from "react-icons/fi"
import ThemeContext from "../../context/ThemeContext";

const ContactWrapper = styled.div`
  h4 {
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 72px;
    letter-spacing: 1px;
  }
  .icons {
    display: flex;
    gap: 20px;
    a{
      color: ${props => props.theme === "light" ? "#333" : "#fff"}
    }
    svg{
      font-size: 24px;
      cursor: pointer;
    }
  }
`;

const Contact = ({ title }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <ContactWrapper theme={theme}>
      <h4>{title}</h4>
      <div className="icons">
        <a href="https://www.instagram.com/666_dagui/" target="_blank"><GrInstagram /></a>
        <a href="#"><FiTwitter /></a>
        <a href="#"><FiFacebook /></a>
      </div>
    </ContactWrapper>
  );
};

export default Contact;
