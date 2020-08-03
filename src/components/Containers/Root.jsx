import React from 'react';
import styled from 'styled-components';

const StyledRoot = styled.div`
background-color: #0d0d0d;
width: 100%;
min-height: 100vh;
display: flex;
align-items: center;
flex-direction: column;
`;

const Root = (props) => {
  return (
    <StyledRoot>
      {props.children}
    </StyledRoot>
  )
}

export default Root;