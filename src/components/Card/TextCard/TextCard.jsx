import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 500px;
    h2{
        margin-bottom: 1rem;
    }
    @media (max-width: 768px) {
      width: 100%;
    } 
`

const TextCard = ({ title, content }) => {
  return (
    <Wrapper>
        <h2>{title}</h2>
        <p>{content}</p>
    </Wrapper>
  )
}

export default TextCard