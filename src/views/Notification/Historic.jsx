import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { getOrdersByStatus } from '../../services/Order';
import Root from '../../components/Containers/Root';
import Header from '../../components/Containers/Header';
import Orders from '../../components/Containers/Orders';

const Title = styled.h1`
  margin: 25px 0px;
  color: #F2B90C;
  font-size: 30px;
  font-weight: 900;
  width: 100%;
  text-align: center;
`;

function Notification() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrdersByStatus('finalizado', setOrders);
  }, []);

  return (
    <Root>
      <Header notification="renderNotification" />
      <Title>HISTÓRICO DE PEDIDOS</Title>
      <Orders orders={orders} />
    </Root>
  );
}


const connectedWithRouter = withRouter(Notification);
export default connectedWithRouter;
