import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
  font-size: 24px;
  font-weight: 700;
  input{
    border: 2px solid #0d0d0d;  
    border-radius: 10px;
    height: 40px;
    width: 160px;
    margin: 0px 10px;
    padding-left: 15px;
    font-size: 20px;
    font-weight: 600;
    ::-webkit-inner-spin-button, 
    ::-webkit-outer-spin-button { 
      -webkit-appearance: none; 
      margin: 0; 
    }
  }
`;

const OrderInput = (props) => {
  return (
    <StyledLabel> {props.label}
      <input type={props.type} name={props.name} onChange={props.handleChange} required />
    </StyledLabel>
  )
}

export default OrderInput;