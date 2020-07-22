import React, { useState } from 'react';
import './Input.css'
import '../../assets/icons/style.css'

const PasswordInput = (props) => {
  let [hidden, setHidden] = useState(true);
  let [iconEye, setIcon] = useState('icon-eye');

  const changeVisibility = hidden =>  {
    if(hidden === true) {
      setIcon('icon-eye-blocked')
      setHidden(false);
    } else {
      setIcon('icon-eye')
      setHidden(true)
    } 
  };

  return <label className="password-input"> {props.label}
    <i className={iconEye} onClick={() => changeVisibility(hidden)}></i>
    <input
      className="input"
      type={hidden ? "password" : "text"}
      name={props.name}
      autoComplete={props.autoComplete}
      placeholder={props.placeholder}/>
  </label> 
}

export default PasswordInput;
