import React from 'react';
import styled from 'styled-components';

const StyledBtn = styled.button`
  background-color: #f28907;
  border: 2px solid #f28907;
  border-radius: 10px;
  color: #ffffff;
  font-size: 30px;
  font-weight: 700;
  outline: none;
  width: 280px;
  height: 70px;
  margin: 30px 0px;
  align-self: center;
  cursor: pointer;
  &:active{
    color: #f28907;
    background-color: #FFF;
    transition: 0.3s
  }
`;

const SignButton = (props) =>  <StyledBtn type={props.type}> {props.text} </StyledBtn>;

export default SignButton;
