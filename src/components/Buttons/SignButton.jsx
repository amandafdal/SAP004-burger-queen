import React from 'react';
import styled from 'styled-components';

const StyledBtn = styled.button`
  background-color: #f28907;
  border: none;
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
`;

const SignButton = (props) =>  <StyledBtn type={props.type}> {props.text} </StyledBtn>;

export default SignButton;
