import React from 'react';
import styled from 'styled-components';

const BoxError = styled.div`
  border-radius: 10px;
  background-color: rgba(242, 31, 12, .2);
  text-align: center;
  width: max-content;
  line-height: 100%;
  align-self: center;
  padding: 5px;
  margin-top: 20px;

  p {
    font-size: 18px;
    font-weight: 700;
    color: rgba(242, 31, 12, 1);
  }
`;

const ErrorMessage = (props) =>  <BoxError> <p>{props.text}</p> </BoxError>;

export default ErrorMessage;


