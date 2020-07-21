import React from 'react';
import './Input.css'

const Input = (props) => {
  return <label> {props.label}
    <input
      className="input"
      type={props.type}
      name={props.name}
      autoComplete={props.autoComplete}
      placeholder={props.placeholder} />
  </label>
}

export default Input;