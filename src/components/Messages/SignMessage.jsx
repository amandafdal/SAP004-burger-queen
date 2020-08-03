import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Paragraph = styled.p`
  color: #0D0D0D;
  font-size: 25px;
  font-weight: 900;
  margin-bottom: 45px;
`;

const STyledLink = styled(Link)`
  color: #F28907;
`;

const SignMessage = (props) =>  <Paragraph> <p>{props.text} <STyledLink to={props.link}>{props.linkText}</STyledLink></p> </Paragraph>;

export default SignMessage;
