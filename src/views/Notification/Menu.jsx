import React from 'react';
import { Link, withRouter  } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #0D0D0D;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Links = styled(Link)`
  color: #fff;
  margin: 25px 0px;
  color: #F2B90C;
  font-size: 30px;
  font-weight: 900;
`;

function Menu() {
  /* add renderização condicional */
  return (
    <Container>
      <Links to="/notification">ENTREGA</Links>
      <Links to="/historic">HISTÓRICO DE PEDIDOS</Links>
      <Links to="/attendence">MENU</Links>
    </Container>
  );
}


const connectedWithRouter = withRouter(Menu);
export default connectedWithRouter;


