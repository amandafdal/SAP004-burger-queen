import React, { useState, useEffect } from 'react';
import firebase from '../../firebase';
import styled from 'styled-components';
import OrderContainer from './OrderContainer';
import ConfirmButton from '../Buttons/ConfirmButton';

const StyledMain = styled.main`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  p, td {
    font-size: 20px;
    font-weight: 600;
    padding: 5px;
  }
`;

const KitchenOrders = () => {
  const [orders, setOrders] = useState([]);

  const getOrders = () => {
    firebase.firestore().collection('orders')
    .orderBy('orderTime', 'asc')
    .onSnapshot((querySnapshot) => {
      let dbOrders = [];
      querySnapshot.forEach(
        (doc) => {
          if (doc.data().status === 'preparando') {
            dbOrders.push(
              {id: doc.id,
              ...doc.data()}
            )
          }
        }
      )
      setOrders(dbOrders);
    }
    )
  };

  useEffect(() => getOrders(), [])

  const listOrder = (order) => {
    let line = [];
    for (const item in order) {
      line.push(
      <tr>
        <td>{order[item].quantidade}x </td>
        <td>{order[item].nome}</td>
      </tr>)
    }
    return line;
  }

  const readyToDeliver = (order) => {
    firebase.firestore().collection('orders').doc(order)
    .update({status: 'pronto'})
  }

  return (
      <StyledMain>
        {
          orders.map(order => (
            <OrderContainer key={order.id}>
              <p>Cliente: {order.cliente}</p>
              <p>Mesa: {order.mesa}</p>
              <table>
                <tbody>
                  {listOrder(order.pedido)}
                </tbody>
              </table>
              <ConfirmButton handleClick={() => readyToDeliver(order.id)} value="Pronto"/>
            </OrderContainer>
          ))
        }
      </StyledMain>
  );
}

export default KitchenOrders;
