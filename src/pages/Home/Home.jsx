import React, { useContext } from 'react'
import styled from 'styled-components'
import ThemeContext from '../../context/ThemeContext'
import Hero from '../../components/Hero/Hero';
import ProjectSection from "../../components/ProjectSection/ProjectSection"
import SnippetSection from '../../components/SnippetSection/SnippetSection';
const HomeContainer = styled.div`
    padding: 1rem 2rem;
    background-color: ${props => props.theme === "light" ? "#fff" : "#333"};
    color: ${props => props.theme === "light" ? "#333" : "#fff"};
    .inner{
        width: 1140px;
        margin: 0 auto;
    }

    @media (max-width: 768px) {
        padding: 1rem;
    }
`;

const Home = ({ repositories }) => {
    const { theme } = useContext(ThemeContext)
  return (
    <HomeContainer theme={theme}>
      <div className='inner'>
        <Hero />
        <ProjectSection />
        <SnippetSection repositories={repositories} />
      </div>
    </HomeContainer>
  )
}

export default Home