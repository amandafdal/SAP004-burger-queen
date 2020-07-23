import React from 'react';
import styled from 'styled-components';

const StyledOpt = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 15px;

  label{
    display: flex;

  input{
    appearance: none;
    width: 25px;
    height: 25px;
    margin: auto 5px;
    border-radius: 50%;
    border: 2px solid  #F28907;
    transition: 0.2s all linear;
    background-color: { checked ? #F28907 : #FFF } /* corrigir ternário */
`;

const ServiceOpt = () => {
  return <StyledOpt>
  <label>
    <input type="radio" name="service" value="atendente" />
    Atendimento
  </label>
  <label>
    <input type="radio" name="service" value="chef" />
    Cozinha
  </label>
</StyledOpt>;
}

export default ServiceOpt;
