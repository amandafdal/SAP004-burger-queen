import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  min-width: 300px;
  width: 75%;
  height: fit-content;
  margin: 20px;
  padding: 5px;
  border-radius: 20px;
  border: 10px solid #F2B90C;
  form{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 10px 0;
  }
  @media only screen and (min-width: 1024px) {
    width: 560px;
  }
`;


const OrderContainer = (props) => {
  return (
    <StyledContainer> {props.children}</StyledContainer>
  )
}

export default OrderContainer;
