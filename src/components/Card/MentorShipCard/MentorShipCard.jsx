import React, { useContext } from "react";
import styled from "styled-components";
import ThemeContext from "../../../context/ThemeContext";
import SeeMoreButton from "../../Button/SeeMoreButton/SeeMoreButton";
import icon from "../../../assets/emoji4.png";
import icon2 from "../../../assets/emoji2.png";
import icon3 from "../../../assets/emoji3.png";
const MentorShipCardWrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  background: ${(props) => (props.theme === "light" ? "#333" : "#fff")};
  color: ${(props) => (props.theme === "light" ? "#fff" : "#333")};
  border-radius: 12px;
  border: 2px solid ${(props) => (props.theme === "light" ? "#fff" : "#333")};

  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 18px;

  .flex {
    display: flex;
  }

  .flex img {
    width: 12%;
    height: 12%;
    position: absolute;
    left: -16px;
  }

  .flex h6 {
    margin: auto;
  }

  h6 {
    font-size: 28px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 1px;
    text-align: left;
  }

  .row-area {
    display: inline-block;
    vertical-align: top;
    margin: 20px;
  }

  .margin10 {
    margin: 10px 0;
  }

  small {
    margin: 20px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 1px;
  }
`;

const ButtonArea = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`;

const Margin20 = styled.div`
  margin: 20px 0;
  padding: 20px;
`;

const MentorShipCard = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Margin20>
      <MentorShipCardWrapper theme={theme}>
        <div className="row-area">
          <div className="flex margin10">
            <img className="center" src={icon} />
            <h6>Minggu Pertama</h6>
          </div>
          <small>
            Membahas dasar dari website seperti tag atribut dan element.{" "}
          </small>
        </div>
        <div className="row-area">
          <div className="flex">
            <img className="center" src={icon2} />
            <h6>Minggu Kedua</h6>
          </div>
          <small>Membahas seputar Pengembangan website - SDLC dasar.</small>
        </div>
        <div className="row-area">
          <div className="flex">
            <img className="center" src={icon3} />
            <h6>Minggu Ketiga</h6>
          </div>
          <small>
            Membahas seputar konsep layouting seperti flexbox dan grid.
          </small>
        </div>
      </MentorShipCardWrapper>
      <ButtonArea clasname="button-area center">
        <SeeMoreButton />
      </ButtonArea>
    </Margin20>
  );
};
export default MentorShipCard;
