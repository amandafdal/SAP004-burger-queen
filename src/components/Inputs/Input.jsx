import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  border: 2px solid #F28907;  
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  height: 80px;
  width: 460px;
  margin: 10px 0px;
  padding-left: 15px;
  font-size: 25px;
`;

const Input = (props) => <label> {props.label}
  <StyledInput
    className="input"
    type={props.type}
    name={props.name}
    autoComplete={props.autoComplete}
    placeholder={props.placeholder} />
</label>;

export default Input;