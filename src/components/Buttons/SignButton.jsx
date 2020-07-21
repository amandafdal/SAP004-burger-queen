import React from 'react';
import './SignButton.css'

const SignButton = (props) => {
    return <button className = "signButton" type={props.type}> {props.text} </button>
}

export default SignButton;