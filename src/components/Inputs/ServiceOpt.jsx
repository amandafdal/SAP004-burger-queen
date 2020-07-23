import React from 'react';
import styled from 'styled-components';

const StyledOpt = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 15px;

  label{
    display: flex;
  }

  input{
    appearance: none;
    width: 25px;
    height: 25px;
    margin: auto 5px;
    border-radius: 50%;
    border: 2px solid  #F28907;
    transition: 0.2s all linear;
  }

  input:checked {
    background-color: #F28907; 
  }
`;

const ServiceOpt = () => {
  return <StyledOpt>
    <label>
      <input type="radio" name="service" value="atendente" required />
    Atendimento
  </label>
    <label>
      <input type="radio" name="service" value="chef" />
    Cozinha
  </label>
  </StyledOpt>;
}

export default ServiceOpt;
