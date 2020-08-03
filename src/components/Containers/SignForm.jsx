import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  color: #0D0D0D;
  font-size: 25px;
  font-weight: 900;
`;

const SignForm = (props) => {
  return (
    <StyledForm onSubmit={props.handleSubmit}>
      {props.children}
    </StyledForm>
  )
}

export default SignForm;