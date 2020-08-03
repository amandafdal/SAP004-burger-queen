import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  width: max-content;
  height: fit-content;
  margin: 20px;
  padding: 5px;
  border-radius: 20px;
  border: 10px solid #F2B90C;
  form{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;


const OrderContainer = (props) => {
  return (
    <StyledContainer id="order-resume"> {props.children}</StyledContainer>
  )
}

export default OrderContainer;
