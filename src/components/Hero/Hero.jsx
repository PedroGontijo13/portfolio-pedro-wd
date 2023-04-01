import React, { useContext } from "react";
import styled from "styled-components";
import ThemeContext from "../../context/ThemeContext";
import Avatar from "../Avatar/Avatar";
import TextCard from "../Card/TextCard/TextCard";
import Contact from "../Contact/Contact";
import SkillCard from "../Card/SkillCard/SkillCard";
import { HiGlobe, HiClipboardList } from "react-icons/hi";
const Wrapper = styled.div``;

const HeroTitle = styled.h1`
  margin-top: 3rem;
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  line-height: 72px;
  letter-spacing: 1px;
  background: ${(props) =>
    props.theme === "light"
      ? "linear-gradient(134.01deg, #333 0.75%, #4CA9FF 95.52%)"
      : "linear-gradient(134.01deg, #3BF686 20.75%, #4CA9FF 90.52%)"};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 48px;
  }
`;

const RowWrapper = styled.div`
  // display: grid;
  // grid-template-columns: 1fr 1fr 2fr;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin: 4rem 0;

  @media (max-width: 768px) {
    display: flex;
    margin: 0px auto;
    justify-content: center;
    align-items: center;
  }
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(556px, 1fr));
  // gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
    p {
      margin-bottom: 2rem;
    }
  }
  .list {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;

    @media (max-width: 768px) {
      margin-top: 2rem;
      justify-content: center;
      gap: 3rem;
    }
  }
`;

const Hero = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Wrapper>
      <HeroTitle theme={theme}>
        Hi Im Pedro, a special human with some ability to love learning and
        working on teamwork.{" "}
      </HeroTitle>

      <RowWrapper>
        <Avatar />
        <TextCard
          title="Biography"
          content={
            "Getting Buff +1 for learning, Buff +2 for documentation and more buff on managing team. Exicited on React, UX Research and Agile."
          }
        />
        <Contact title={"Lets connect"} />
      </RowWrapper>
      <GridWrapper>
        <TextCard
          title="What I do"
          content={
            "Build and maintain websites, frontend dev also have a mentorship called MOFON. My motto is Beauty and function in equal measure as priority."
          }
        />
        <div className="list">
          <SkillCard
            title={"Web Development"}
            content={
              "You will receive a customized plan for your fitness journey, and lots of support."
            }
            icon={<HiGlobe />}
          />
          <SkillCard
            title={"UX Research"}
            content={
              "You will receive a customized plan for your fitness journey, and lots of support."
            }
            icon={<HiClipboardList />}
          />
        </div>
      </GridWrapper>
    </Wrapper>
  );
};

export default Hero;
