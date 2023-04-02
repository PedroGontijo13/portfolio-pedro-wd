import React from "react";
import styled from "styled-components";
import MentorShipCard from "../Card/MentorShipCard/MentorShipCard";
const ProjectHeadingWrapper = styled.div`
  @media (max-width: 768px) {
  }

  .center {
    display: flex;
    align-items: center;
    justify-content: center 
  }

  .MobileCenter {
    @media (max-width: 768px) {
      display: flex;
      justify-content: center;
      align-itens: center;
    }
  }

  .w-50 {
    width: 50%;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  .mentorArea {
    display: flex;
    @media (max-width: 768px) {
      display: block;
    }
  }
  .margin10 {
    margin: auto;
  }
`;

const MentorShipHeading = () => {
  return (
    <ProjectHeadingWrapper>
      <h1 className="MobileCenter center">MentorShip</h1>
      <div className="mentorArea">
        <div className="w-50 margin10">
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
      </div>
    </ProjectHeadingWrapper>
  );
};

export default MentorShipHeading;
