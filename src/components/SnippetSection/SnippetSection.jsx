import React from 'react'
import styled from 'styled-components'
import SnippetCard from '../Card/SnippetCard/SnippetCard';
import SeeMoreButton from '../Button/SeeMoreButton/SeeMoreButton';
const Wrapper = styled.div`
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    .list{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(556px, 1fr));
        gap: 1rem;
        @media (max-width: 768px) {
            grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
        }
    }
`;

const Title =  styled.h1`
    font-size: 48px;
`;

const SnippetSection = ({ repositories }) => {
  return (
    <Wrapper>
        <Title>Code Snippet</Title>
        <div className='list'>
            {
                repositories.slice(0, 4).map((repo, index) => {
                    return <SnippetCard key={index} title={repo.name} rating={repo.stargazers_count} languages={repo.languages_url} />
                })
            }
        </div>
        <SeeMoreButton url={"/snippet"} />
    </Wrapper>
  )
}

export default SnippetSection