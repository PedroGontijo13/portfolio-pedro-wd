import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import ThemeContext from "../../context/ThemeContext";
import SearchBar from "../../components/SearchBar/SearchBar";
import SnippetCard from "../../components/Card/SnippetCard/SnippetCard";

const SnippetContainer = styled.div`
  padding: 1rem 2rem;
  background-color: ${(props) => (props.theme === "light" ? "#fff" : "#333")};
  color: ${(props) => (props.theme === "light" ? "#333" : "#fff")};
  .inner {
    width: 1140px;
    margin: 0 auto;
  }

  h1 {
    font-weight: 700;
    font-size: 48px;
    margin: 2rem 0;
  }

  h5 {
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 1.4rem;
  }
  .pagination{
    display: flex;
    justify-content:center;
  }
`;

const GridWrapper = styled.div`
  margin: 2rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
`;

const PageButton = styled.button`
  padding: 0.25rem 0.7rem;
  margin: 0 4px;
  border: none;
  background-color: ${(props) => (props.active ? "orange" : (props.theme === "light" ? "#333" : "#fff"))};
  color: ${(props) => (props.theme === "light" ? "#fff" : "#333")};
  border-radius: 4px;
  cursor:pointer;
  font-weight: bolder;
`;

const Snippet = ({ repositories }) => {
  const { theme } = useContext(ThemeContext);
  const [showRepositories, setShowRepositories] = useState(repositories);
  const [search, setSearch] = useState("");
  
  const [currentPage, setCurrentPage] = useState(1)
  const itemPerPage = 6;

  useEffect(() => {
    setShowRepositories(filterRepositories())
  }, [search])


  const handleSearch = (event) => {
    setSearch(event.target.value);
    setCurrentPage(1);
  }

  const filterRepositories = () => {
    if(!search){
      return repositories;
    }

    return repositories.filter((repo) => {
      return repo.name.toLowerCase().includes(search.toLowerCase());
    })
  }

  const handleChangePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  const renderPageNumber = () => {
    const totalPages = Math.ceil(showRepositories.length / itemPerPage);
    const pageNumbers = [];

    for(let i = 1; i <= totalPages; i++){
      pageNumbers.push(<PageButton key={i} onClick={() => handleChangePage(i)} active={i === currentPage} theme={theme}>{i}</PageButton>)
    }

    return pageNumbers;
  }

  const paginatedRepos = showRepositories.slice((currentPage - 1) * itemPerPage, currentPage * itemPerPage);

  return (
    <SnippetContainer theme={theme}>
      <div className="inner">
        <h1>Code Snippet</h1>
        <h5>Search code snippet</h5>
        <SearchBar handleSearch={handleSearch} />
        <GridWrapper>
          {
            paginatedRepos.map((repo, index) => {
              return <SnippetCard key={index} title={repo.name} content={repo.description} rating={repo.stargazers_count} languages={repo.languages_url} />
            })
          }
        </GridWrapper>

        <div className="pagination">
          {renderPageNumber()}
        </div>
      </div>
    </SnippetContainer>
  );
};

export default Snippet;
