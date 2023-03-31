import React, { useContext } from "react";
import styled from "styled-components";
import ThemeContext from "../../../context/ThemeContext";

const SkillCardWrapper = styled.div`
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
    position: absolute;
    top: -36px;
    width: 76px;
    height: 76px;
    background: linear-gradient(134.01deg, #4ca9ff 38.91%, #3bf686 103.79%);
    border-radius: 50%;
    #inner{
        position:relative;
        left: 2px;
        top: 2px;
        width: 72px;
        height: 72px;
        background: ${(props) => (props.theme === "light" ? "#333" : "#fff")};
        border-radius: 50%;

        display: flex;
        justify-content:center;
        align-items:center;
        svg{
            font-size: 32px;
        }
    }
`;

const SkillCard = ({ title, content, icon }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <SkillCardWrapper theme={theme}>
      <EllipseShape theme={theme}>
        <div id="inner">
            {icon}
        </div>
      </EllipseShape>
      <h6>{title}</h6>
      <small>
        {content}
      </small>
    </SkillCardWrapper>
  );
};

export default SkillCard;
