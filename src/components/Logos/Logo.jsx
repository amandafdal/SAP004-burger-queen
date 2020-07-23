import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/img/logo.png';

const StyledLogo = styled.img`
  align-self: center;
  position: absolute;
  top: 32px;
  width: 300px;
  left: 50%;
  transform: translateX(-50%);
`;

const Logo = () =>  <StyledLogo src={logo} alt="Logo" />

export default Logo;
