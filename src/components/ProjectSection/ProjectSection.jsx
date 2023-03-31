import React, { useContext } from 'react'
import styled from 'styled-components'
import ThemeContext from '../../context/ThemeContext'
import ProjectCard from '../Card/ProjectCard/ProjectCard';
import SeeMoreButton from '../Button/SeeMoreButton/SeeMoreButton';
import WebSiteImage from "../../assets/website.png"
const Wrapper = styled.div`
    display: flex;
    height: auto;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem 0;
`;

const Title = styled.h1`
  font-size: 48px;
`;

const ProjectSection = () => {
    const { theme } = useContext(ThemeContext);
  return (
    <Wrapper>
        <Title>Featured Project</Title>
        <ProjectCard 
          type={"Web Development"} 
          title={"Bolder Landing page"}
          content={"Serrow restructured and designed core pages, creating interactive elements that put users in control and allowed them to discover the information needed to make a decision."}
          image={WebSiteImage}
        />
        <ProjectCard 
          type={"Web Development"} 
          title={"Bolder Landing page"}
          content={"Serrow restructured and designed core pages, creating interactive elements that put users in control and allowed them to discover the information needed to make a decision."}
          image={WebSiteImage}
        />
        <SeeMoreButton url={"/portfolio"} />
    </Wrapper>
  )
}

export default ProjectSection