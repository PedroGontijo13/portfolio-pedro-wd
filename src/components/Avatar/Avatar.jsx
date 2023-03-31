import React, { useContext } from 'react'
import styled from 'styled-components'
import ThemeContext from '../../context/ThemeContext'
import AvatarImg from "../../assets/avatar.svg"

const WrapperAvatar = styled.div`
    border: 3px solid ${props => props.theme === "light" ? "#333" : "#fff"};
    min-width: 155px;
    height: 155px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items:center;


    img{
        width: 124px;
        height: 124px;
    }
`

const Avatar = () => {
    const { theme } = useContext(ThemeContext)
  return (
    <WrapperAvatar theme={theme}>
        <img src={AvatarImg} alt="" />
    </WrapperAvatar>
  )
}

export default Avatar