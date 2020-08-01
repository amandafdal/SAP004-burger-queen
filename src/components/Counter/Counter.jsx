import React from 'react';
import styled from 'styled-components';

const CounterInput = styled.input`
  background-color: #F2B90C;
  outline: none;
  border: none;
  border-radius: 10px;
  color: #0d0d0d;
  font-size: 40px;
  font-weight: 700;
  width: 60px;
  height: 46px;
  margin: 5px;
  text-align: center;
  ::-webkit-inner-spin-button, 
  ::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    margin: 0; 
  }
`;

const Counter = (props) => {
  return (
    <CounterInput
      type="number" min = "0"
      value={props.value} 
      onChange={props.handleChange}
    />
  )
}

export default Counter;