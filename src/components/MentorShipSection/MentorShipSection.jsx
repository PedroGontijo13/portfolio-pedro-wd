import React from "react";
import styled from "styled-components";
import img1 from "../../assets/imgMentorship.png";
import img2 from "../../assets/imgMentorship2.png";
import img3 from "../../assets/imgMentorship3.png";
import MentorShipCard2 from "../Card/MentorShipCard2/MentorShipCard2";
const ProjectSectionWrapper = styled.div`
  @media (max-width: 768px) {
  }
  .center {
    display: fle;
    justify-content: center;
    align-itens: center;
  }

  h1 {
    margin: 30px 0;
  }

  .margin-top {
    margin-top: 50px;
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
        <h1 style={{ textAlign: "center" }} className="center">
          Pedro Mentorship
        </h1>
      </div>
      <div className="center margin-top">
        <MentorShipCard2
          icon={img1}
          title="Mentorship 1 : 1"
          content="Video Call 1 : 1 dengan mentor untuk berdiskusi, bertanya dan konsultasi seputar mentorship frontend atau hal lainnya"
        />
      </div>
      <div className="center margin-top">
        <MentorShipCard2
          icon={img2}
          title="Terarah"
          content="Video Call 1 : 1 dengan mentor untuk berdiskusi, bertanya dan konsultasi seputar mentorship frontend atau hal lainnya"
        />
      </div>
      <div className="center margin-top">
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
