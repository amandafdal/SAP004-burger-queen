import React from 'react';
import styled from 'styled-components';

const StyledBtn = styled.button`
  background-color: #6AD959;
  outline: none;
  border: none;
  border-radius: 10px;
  width: max-content;
  height: 50px;
  margin: 10px 10px 0px;
  padding: 10px;
  color: #ffffff;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
`;

const ConfirmButton = (props) =>  <StyledBtn type={props.type}> {props.value} </StyledBtn>;

export default ConfirmButton;