import React, { useState } from 'react';
import CounterButton from './CounterButton';

const Counter = (props) => {
  const [cart, setCart] = useState({});

  const addToCart = (item) => {
    let product;
    if (item.id in cart) {
      const itemCart = cart[item.id];
      product = {
        ...cart,
        [item.id]: {
          ...itemCart,
          quantidade: parseInt(itemCart.quantidade) + 1
        }
      }
    } else {
      product = {
        ...cart,
        [item.id]: {
          nome: item.data().nome,
          valor: item.data().valor,
          quantidade: 1,
        }
      }
    }
    setCart(product);
  };

  const delFromCart = (item) => {
    let product;
    if (item.id in cart && cart[item.id].quantidade > 0) {
      const itemCart = cart[item.id];
      product = {
        ...cart,
        [item.id]: {
          ...itemCart,
          quantidade: itemCart.quantidade - 1
        }
      }
    } else {
      product = { ...cart }
      delete product[item.id]
    }
    setCart(product);
  };

  const setAmount = (item, value) => {
    setCart({
      ...cart,
      [item.id]: {
        nome: item.data().nome,
        quantidade: value,
      }
    })
  }

  return (
    <>
    < CounterButton handleClick={() => addToCart(props.item)} value='Adicionar'/>
    <input
      type="number" min = "0"
      value={(cart[props.item.id] && cart[props.item.id].quantidade) || 0}
      onChange={(e) => setAmount(props.item, e.currentTarget.value)}
    />
    < CounterButton handleClick={() => delFromCart(props.item)} value='Remover'/>
    </>
  )
}

export default Counter;