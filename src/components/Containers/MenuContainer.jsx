import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.section`
  width: 80%;
  max-width: 620px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  margin: 20px;
  border-radius: 50px 50px 0px 0px;
  border: 10px solid #F2B90C;
  h1{
    background-color: #F2B90C;
    width: 100%;
    text-align: center;
    padding: 10px;
    margin-bottom: 25px;
    border-radius: 35px 35px 0px 0px;
    font-size: 30px;
    font-weight: 700;
  }
  h2{
    font-size: 24px;
    font-weight: 700;
    text-transform: capitalize;
  }
`;


const MenuContainer = (props) => {
  return (
    <StyledContainer id="order-resume"> {props.children}</StyledContainer>
  )
}

export default MenuContainer;