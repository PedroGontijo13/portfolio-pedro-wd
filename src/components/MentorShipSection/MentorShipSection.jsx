import React from "react";
import styled from "styled-components";
import MentorShipCard from "../Card/MentorShipCard/MentorShipCard";
import SeeMoreButton from "../Button/SeeMoreButton/SeeMoreButton";
const ProjectSectionWrapper = styled.div`
  @media (max-width: 768px) {
  }
  margin: 50px 0;
  .center {
    display: fle;
    justify-content: center;
    align-itens: center;
  }

  .w-50 {
    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

const MentorShipSection = () => {
  return (
    <ProjectSectionWrapper>
      <div className="w-50">
        <h1 className="center">MentorShip</h1>
        <p>
          Menghabiskan banyak waktu untuk belajar <span> sendiri </span>dan
          tetap merasa stuck?
        </p>
        <p>
          Mentorship Frontend ini menjadi jawaban atas permasalahanmu. Karena
          disini, kamu bakal merasakan mentoring yang lebih personal
        </p>
      </div>
    </ProjectSectionWrapper>
  );
};

export default MentorShipSection;
