import React, { useState } from 'react';
import styled from 'styled-components';
import '../../assets/icons/style.css'

const Label = styled.label`
  position: relative;

  input {
    border: 2px solid #F28907;  
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    height: 80px;
    width: 460px;
    margin: 10px 0px;
    padding-left: 15px;
    font-size: 25px;
  }

  i {
    position: absolute;
    right: 20px;
    bottom: 35px;
  }
`;

const PasswordInput = (props) => {
  let [hidden, setHidden] = useState(true);
  let [iconEye, setIcon] = useState('icon-eye');

  const changeVisibility = hidden => {
    if (hidden === true) {
      setIcon('icon-eye-blocked')
      setHidden(false);
    } else {
      setIcon('icon-eye')
      setHidden(true)
    }
  };

  return <Label className="password-label"> {props.label}
    <i className={iconEye} onClick={() => changeVisibility(hidden)}></i>
    <input
      type={hidden ? "password" : "text"}
      name={props.name}
      autoComplete={props.autoComplete}
      placeholder={props.placeholder} />
  </Label>
}

export default PasswordInput;
