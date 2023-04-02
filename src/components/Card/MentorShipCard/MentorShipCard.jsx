import React, { useContext } from "react";
import styled from "styled-components";
import ThemeContext from "../../../context/ThemeContext";
import icon from "../../../assets/emoji.png";

const MentorShipCardWrapper = styled.div`
  position: relative;
  width: 262px;
  height: auto;

  background: ${(props) => (props.theme === "light" ? "#333" : "#fff")};
  color: ${(props) => (props.theme === "light" ? "#fff" : "#333")};
  border-radius: 12px;

  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 18px;

  .flex {
    display: flex;
  }
  .flex img {
    width: 31.45px;
    height: 36px;
  }
  .flex h6 {
    margin: auto;
  }
  h6 {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    display: flex;
    align-items: center;
    letter-spacing: 1px;
    margin-top: 56px;
    margin-bottom: 12px;
  }

  small {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 26px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 1px;
  }
`;

const EllipseShape = styled.div`
  width: 76px;
  height: 76px;
  background: linear-gradient(134.01deg, #4ca9ff 38.91%, #3bf686 103.79%);
  border-radius: 50%;
  #inner {
    width: 72px;
    height: 72px;
    background: ${(props) => (props.theme === "light" ? "#333" : "#fff")};
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      font-size: 32px;
    }
  }
`;

const MentorShipCard = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <MentorShipCardWrapper theme={theme}>
      <div>
        <div className="flex">
          <img src={icon} />
          <h6>dawkjioadjwi</h6>
        </div>
        <small>hadhwuhhbdaw</small>
        <div className="flex">
          <img src={icon} />
          <h6>dawkjioadjwi</h6>
        </div>
        <small>hadhwuhhbdaw</small>
        <div className="flex">
          <img src={icon} />
          <h6>dawkjioadjwi</h6>
        </div>
        <small>hadhwuhhbdaw</small>
      </div>
    </MentorShipCardWrapper>
  );
};

export default MentorShipCard;
