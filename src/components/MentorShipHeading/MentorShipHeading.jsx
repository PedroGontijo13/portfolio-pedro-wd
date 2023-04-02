import React from "react";
import styled from "styled-components";
import MentorShipCard from "../Card/MentorShipCard/MentorShipCard";
import SeeMoreButton from "../Button/SeeMoreButton/SeeMoreButton";
const ProjectHeadingWrapper = styled.div`
  @media (max-width: 768px) {
  }

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

const ButtonArea = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`;

const MentorShipHeading = () => {
  return (
    <ProjectHeadingWrapper>
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
      <div className="w-50 center">
        <MentorShipCard />
      </div>
      <ButtonArea clasname="button-area center">
        <SeeMoreButton />
      </ButtonArea>
    </ProjectHeadingWrapper>
  );
};

export default MentorShipHeading;
