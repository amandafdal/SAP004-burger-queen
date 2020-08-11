import React from 'react';
import styled from 'styled-components';

const StyledBtn = styled.button`
  background-color: #F21F0C;
  outline: none;
  border: 2px solid #F21F0C;
  border-radius: 10px;
  width: max-content;
  height: 50px;
  margin: 10px;
  padding: 10px;
  color: #ffffff;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
  &:active{
    color: #F21F0C;
    background-color: #FFF;
    transition: 0.3s
  }
`;

const CancelButton = (props) =>  <StyledBtn type={props.type} onClick={props.handleClick}> {props.value} </StyledBtn>;

export default CancelButton;
