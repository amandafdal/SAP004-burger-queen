import React from 'react';
import styled from 'styled-components';

const StyledBtn = styled.button`
  background-color: #F21F0C;
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

const CancelButton = (props) =>  <StyledBtn type={props.type} onClick={props.handleClick}> {props.value} </StyledBtn>;

export default CancelButton;
