import React, { useContext } from "react";
import styled from "styled-components";
import ThemeContext from "../../context/ThemeContext";
import ProjectHeading from "../../components/ProjectHeading/ProjectHeading";
import ProjectCard from "../../components/Card/ProjectCard/ProjectCard";
import ProjectImg from "../../assets/project.jpg";
const PortfolioContainer = styled.div`
  padding: 2rem 0;
  background-color: ${(props) => (props.theme === "light" ? "#fff" : "#333")};
  color: ${(props) => (props.theme === "light" ? "#333" : "#fff")};
`;

const Portfolio = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="flex">
      <PortfolioContainer theme={theme}>
        <ProjectHeading />
        <ProjectCard
          type={"Web Development"}
          title={"React Movies"}
          content={
            "Movies page that contains movie information, such as ratings. Using React Js and Axios to fetch the Movie Db Api data."
          }
          image={ProjectImg}
        />
      </PortfolioContainer>
    </div>
  );
};

export default Portfolio;
