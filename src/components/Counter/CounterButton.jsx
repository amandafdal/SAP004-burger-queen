import React from 'react';

const CounterButton = (props) => {
  return (
    <button type="button" onClick={props.handleClick}>{props.value}</button>
  )
}

export default CounterButton;
