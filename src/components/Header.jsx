import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/img/logo-header1.png';
import SignOutIcon from '../assets/icons/SignOutIcon.png';

const StyledHeader = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  background-color: #F2B90C;
  width: 100%;
  height: 60px;
  .logo{
    height: 40px;
    margin: auto;
  }
  .signOutIcon{
    position: absolute;
    height: 30px;
    margin: auto 15px;
  }
`;

const Header = () => {
  return(
    <StyledHeader>
      <img className="logo" src={Logo} alt="logo"/>
      <img className="signOutIcon"src={SignOutIcon} alt="Sair"/>
    </StyledHeader>
  )
}

export default Header;
