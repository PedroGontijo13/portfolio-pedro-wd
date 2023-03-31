import React, { useContext } from "react";
import styled from "styled-components";
import ThemeContext from "../../../context/ThemeContext";

const ProjectCardWrapper = styled.div`
  max-width: 1141px;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  // gap: 1rem;
  // gap:20px;
`;
const ProjectCardDesing = styled.div`
  width: 556px;
  height: 282px;
  background-color: ${props => props.theme === "light" ? "#333" : "#fff"};
  overflow:hidden;
  position: relative;
  img{
    position: absolute;
    width: 80%;
    left: 0;
    right: 0;
    top: 100px;
    margin: 0 auto;
  }
`;

const ProjectCardContent = styled.div`
  max-width: 560px;
  margin-left: 20px;
  height: auto;
  // padding: 1rem 2rem;
  h5{
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 1px;
  }
  h3{
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 56px;

    display: flex;
    align-items: center;
    letter-spacing: 1px;
    margin: 1rem 0;
  }
  p{
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;

    display: flex;
    align-items: center;
    letter-spacing: 0.014em;
  }
`;

const ProjectCard = ({ type, title, content, image }) => {
  const { theme } = useContext(ThemeContext)
  return (
    <ProjectCardWrapper theme={theme}>
      <ProjectCardDesing theme={theme}>
        <img src={image} alt="" className="project-image" />
      </ProjectCardDesing>
      <ProjectCardContent>
        <h5 className="right-side-head">{type}</h5>
        <h3 className="right-side-title">{title}</h3>
        <p className="right-side-description">
          {content}
        </p>
      </ProjectCardContent>
    </ProjectCardWrapper>
  );
};

export default ProjectCard;
