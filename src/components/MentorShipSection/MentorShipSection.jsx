import React from "react";
import styled from "styled-components";
import img1 from "../../assets/imgMentorship.png";
import img2 from "../../assets/imgMentorship2.png";
import img3 from "../../assets/imgMentorship3.png";
import MentorShipCard2 from "../Card/MentorShipCard2/MentorShipCard2";
import Biting from "../../assets/Biting.png";
const ProjectSectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin-top: 50px;

  h1 {
    text-align: center;
    margin-bottom: 30px;
  }

  .card {
    margin-top: 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  @media (max-width: 769px) {
    .apperArea {
      display: none;
    }
  }
`;

const MentorShipSection = () => {
  return (
    <ProjectSectionWrapper>
      <div className="apperArea">
        <h1>Pedro Mentorship</h1>
        <img src={Biting} alt="" />
      </div>
      <div className="card">
        <MentorShipCard2
          icon={img1}
          title="Mentorship 1 : 1"
          content="Video Call 1 : 1 dengan mentor untuk berdiskusi, bertanya dan konsultasi seputar mentorship frontend atau hal lainnya"
        />
      </div>
      <div className="card">
        <MentorShipCard2
          icon={img2}
          title="Terarah"
          content="Video Call 1 : 1 dengan mentor untuk berdiskusi, bertanya dan konsultasi seputar mentorship frontend atau hal lainnya"
        />
      </div>
      <div className="card">
        <MentorShipCard2
          icon={img3}
          title="Mentorship 1 : 1"
          content="Video Call 1 : 1 dengan mentor untuk berdiskusi, bertanya dan konsultasi seputar mentorship frontend atau hal lainnya"
        />
      </div>
    </ProjectSectionWrapper>
  );
};

export default MentorShipSection;
