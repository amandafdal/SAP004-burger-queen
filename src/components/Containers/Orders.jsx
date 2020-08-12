import React from 'react';
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

function Orders(props) {
  const totalTime = (initial, finaly) => {
    const timeStampInitial = initial.toDate().getTime();
    const timeStampFinaly = finaly.toDate().getTime();
    const total = new Date(timeStampFinaly - timeStampInitial);
    return `${total.getMinutes()}:${total.getSeconds()}`;
  }


  return (
    <StyledMain>
      {
        props.orders.map(order => (
          <OrderContainer key={order.id}>
            {
              props.time &&
              <p> Tempo: {totalTime(order.orderTime, order.deliverTime)}</p>
            }
            <p>Cliente: {order.cliente}</p>
            <p>Mesa: {order.mesa}</p>
            <table>
              <tbody>
                {
                  Object
                    .keys(order.pedido)
                    .map((key) =>
                      (
                        <tr key={key}>
                          <td>{order.pedido[key].quantidade}x </td>
                          <td>{order.pedido[key].nome}</td>
                        </tr>
                      )
                    )
                }
              </tbody>
            </table>
            {
              props.label &&
              <ConfirmButton handleClick={() => props.onClickOrderButton(order.id)} value={props.label} />
            }
          </OrderContainer>
        ))
      }
    </StyledMain >
  );
}

export default Orders;
