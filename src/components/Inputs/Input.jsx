import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  width: 100%;
  input{
    border: 2px solid #F28907;  
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    height: 80px;
    width: 100%;
    margin: 10px 0px;
    padding-left: 15px;
    font-size: 25px;
}
`;

const Input = (props) => <Label> {props.label}
  <input
    className="input"
    type={props.type}
    name={props.name}
    autoComplete={props.autoComplete}
    placeholder={props.placeholder} required />
</Label>;

export default Input;