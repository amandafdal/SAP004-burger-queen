import React from 'react';
import styled from 'styled-components';

const CounterBtn = styled.button`
  background-color: #F2B90C;
  outline: none;
  border: none;
  border-radius: 50px;
  color: #0d0d0d;
  font-size: 40px;
  font-weight: 700;
  width: 46px;
  height: 46px;
  margin: 5px;
  cursor: pointer;
`;

const CounterButton = (props) => {
  return (
    <CounterBtn type="ConterBtn" onClick={props.handleClick}>{props.value}</CounterBtn>
  )
}

export default CounterButton;
