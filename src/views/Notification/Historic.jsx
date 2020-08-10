import React, { useState, useEffect } from 'react';
import { Link, withRouter  } from 'react-router-dom';
import styled from 'styled-components';
import { getOrdersByStatus } from '../../services/Order';
import Orders from '../../components/Containers/Orders';

const Container = styled.div`
  width: 100%;
  background-color: #0D0D0D;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const LinkS = styled(Link)`
  color: #fff;
  margin: 25px 0px;
  color: #F2B90C;
  font-size: 30px;
  font-weight: 900;
`;

function Notification() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrdersByStatus('finalizado', setOrders);
  }, []);

  return (
    <>
      <Container>
        <LinkS to="/menu">MENU</LinkS>
        <LinkS to="/attendence">SAIR</LinkS>
      </Container>
      <Orders orders={orders} />
    </>
  );
}


const connectedWithRouter = withRouter(Notification);
export default connectedWithRouter;
