import React, { useContext } from "react";
import styled from "styled-components";
import ThemeContext from "../../context/ThemeContext";
import MentorShipHeading from "../../components/MentorShipHeading/MentorShipHeading";
import MentorShipSection from "../../components/MentorShipSection/MentorShipSection";

const MentorShipContainer = styled.div`
  padding: 1rem 2rem;
  background-color: ${(props) => (props.theme === "light" ? "#fff" : "#333")};
  color: ${(props) => (props.theme === "light" ? "#333" : "#fff")};
  
  .inner {
    margin: 0 auto;
  }
  p {
    /* Body/Normal */
    margin: 10px 0;

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 32px;
    /* or 178% */

    letter-spacing: 0.014em;
  }
  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 56px;
    background: ${(props) => (props.theme === "light" ? "black" : "white")};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;
const MentorShip = ({ repositories }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <MentorShipContainer theme={theme}>
      <MentorShipHeading />
      <MentorShipSection />
    </MentorShipContainer>
  );
};

export default MentorShip;
