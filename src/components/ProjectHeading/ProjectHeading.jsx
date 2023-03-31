import React from "react";
import styled from "styled-components";
import arrow from "../../assets/arrow.svg";

const ProjectHeadingWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  h2 {
    width: 458px;
    height: 119px;
    font-style: normal;
    font-weight: 700;
    font-size: 56px;
    span {
      color: #3bf686;
    }

    @media (max-width: 768px) {
      width: 100%;
      font-size: 48px;
      line-height: 48px;
      br{
        display: none;
      }
    }
  }
  img{
  }
`;

const ProjectHeading = ({ title, content }) => {
  return (
    <ProjectHeadingWrapper>
      <h2>
        Project that i <br />
        has been <span>done</span>
      </h2>
      <img src={arrow} alt="" />
    </ProjectHeadingWrapper>
  );
};

export default ProjectHeading;
