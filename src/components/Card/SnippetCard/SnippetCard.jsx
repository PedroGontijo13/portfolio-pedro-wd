import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import ThemeContext from "../../../context/ThemeContext";
import axios from "axios";
// import reactLogo from "../../../assets/React.svg";
// import tailwindLogo from "../../../assets/Tailwind.svg";
import { AiFillStar } from "react-icons/ai";

const SnippetCardWrapper = styled.div`
  height: 282px;
  border-radius: 20px;
  text-align: left;
  padding: 2rem 3rem;
  background-color: ${(props) => (props.theme === "light" ? "#333" : "#fff")};
  color: ${(props) => (props.theme === "light" ? "#fff" : "#333")};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem 2rem;
  }
`;

const SnippetCardTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const SnippetCardBottom = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    gap: 6px;
  }
`;

const Tag = styled.div`
  background-color: ${(props) => (props.theme === "light" ? "#fff" : "#333")};
  color: ${(props) => (props.theme === "light" ? "#333" : "#fff")};
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
`;

const SnippetCard = ({ 
  title, 
  content, 
  rating = 8, 
  languages }) => {
  const { theme } = useContext(ThemeContext);
  const [ language, setLanguage ] = useState([]);

  useEffect(() => {
    fetchLanguageInformation();
  }, [])

  const fetchLanguageInformation = async () => {
    const response = await axios.get(languages);
    setLanguage(Object.keys(response.data))
  }

  return (
    <SnippetCardWrapper theme={theme}>
      <SnippetCardTop>
        <h3>{title}</h3>
        <p>{content || "Commodo deserunt officia mollit pariatur cupidatat consectetur quis amet magna ipsum Lorem consectetur deserunt. Deserunt incididunt elit ullamco fugiat eiusmod voluptate proident minim."}</p>
      </SnippetCardTop>
      <SnippetCardBottom>
        <div className="snippet-bottom-logos">
          {language && language.map((item, index) => {
            return <Tag key={index} theme={theme}>{item}</Tag>
          })}
        </div>
        <div>
          <AiFillStar color="#FFF615" size={18} />
          <p>{rating} Stars</p>
        </div>
      </SnippetCardBottom>
    </SnippetCardWrapper>
  );
};

export default SnippetCard;
