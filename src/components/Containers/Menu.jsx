import React, { useState, useEffect } from 'react';
import firebase from '../../firebase';
/* import NavMenu from '../components/NavMenu'; */
import Counter from '../Counter/Counter';
import styled from 'styled-components';
import CounterButton from '../Counter/CounterButton';
import OrderResume from '../OrderResume';
import OrderInput from '../Inputs/OrderInput';
import CancelButton from '../Buttons/CancelButton'
import ConfirmButton from '../Buttons/ConfirmButton'
import ErrorMessage from '../Messages/ErrorMessage';

const Section = styled.section`
  width: 100%;
  height: fit-content;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MenuContainer = styled.section`
  width: 80%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  margin: 20px;
  border-radius: 50px 50px 0px 0px;
  border: 10px solid #F2B90C;
`;

const MenuTitle = styled.p`
  background-color: #F2B90C;
  width: 100%;
  text-align: center;
  padding: 10px;
  border-radius: 40px 40px 0px 0px;
  font-size: 30px;
  font-weight: 700;
`;

const MenuCategory = styled.p`
  font-size: 24px;
  font-weight: 700;
`;

const Extras = styled.td`
  width: 80px!important;
  display: flex;
  flex-direction: column;

  label {
    display: flex;
    justify-content: space-between;
  }
`;

const Amount = styled.td`
  width: 50px!important;
`;

const MenuTable = styled.table`
  padding: 10px;
  font-size: 20px;
  font-weight: 600;
  width: 100%;
  tr {
    display: flex;
    justify-content: space-between;
    height: 60px;
  }
  td {
    padding: 0px 10px;
    display: inline-block;
    text-align: center;
    width: 200px;
  }
`;

const MenuOrder = styled.table`
  padding: 10px;
  font-size: 20px;
  font-weight: 600;
  width: 100%;
  tr {
    display: flex;
    justify-content: space-between;
    height: auto;
    align-items: center;
    margin-bottom: 20px;
    border-bottom: 1px solid #0d0d0d;
  }
  td {
    display: inline-block;
    text-align: center;
    width: 160px;
  }
`;

const Menu = () => {
  const [menu, setMenu] = useState({});
  const [cart, setCart] = useState({});
  const [emptyCart, setEmpty] = useState(false);

  const getFoods = () => {
    firebase.firestore().collection('foods').get()
      .then(
        (querySnapshot) => {
          const allCategories = Array.from(
            new Set([...querySnapshot.docs.map(item => item.data().categoria)])
          );
          const groupMenu = allCategories.reduce((acc, cur) => {
            acc[cur] = querySnapshot.docs
              .filter(item => cur === item.data().categoria);
            return acc;
          }, {});
          setMenu(groupMenu);
        }
      )
  };

  useEffect(() => getFoods(), [setMenu]);

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
          ...item.data(),
          quantidade: 1
        }
      }
    }
    setEmpty(false)
    setCart(product);
  };

  const delFromCart = (item) => {
    let product;
    if (item.id in cart && cart[item.id].quantidade > 1) {
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

  const setExtra = (item, extra, checked) => {
    setCart({
      ...cart,
      [item]: {
        ...cart[item],
        valor: checked ? cart[item].valor + 1 : cart[item].valor - 1,
        adicionais: {
          ...cart[item].adicionais,
          [extra]: checked
        }
      }
    })
  }

  const printOrder = () => {
    let line = [];
    let valor = [];
    let content = []

    for (const item in cart) {
      valor.push(cart[item].quantidade * cart[item].valor);
      line.push(
        <tr>
          <Amount>{cart[item].quantidade}x</Amount>
          <td>{cart[item].nome}</td>
          <Extras>
            {
              cart[item].categoria === 'hambúrguer' && cart[item].adicionais &&
              Object
                .keys(
                  cart[item].adicionais
                )
                .map((adicional) => (
                  <label>
                    {adicional}
                    <input
                      type="checkbox"
                      checked={cart[item].adicionais[adicional]}
                      onChange={(e) => setExtra(item, adicional, e.currentTarget.checked)} />
                  </label>
                ))
            }
          </Extras>
          <td>R$ {cart[item].quantidade * cart[item].valor},00</td>
        </tr>
      )
    }
    content.push(line);
    content.push(
      <tr>
        <td colSpan="3">Total: R$ {valor.reduce((acc, cur) => acc + cur, 0)},00</td>
      </tr>
    )

    return content;
  }

  const saveOrder = (e) => {
    e.preventDefault()
    const cliente = e.currentTarget.Cliente.value;
    const mesa = e.currentTarget.Mesa.value;

    Object.keys(cart).length === 0
    ? setEmpty(true)
    :firebase.firestore().collection('orders').doc().set({
      cliente: cliente,
      mesa: mesa,
      pedido: cart,
      status: 'preparando',
      orderTime: new Date(),
      deliverTime: null ,
    })
    .then(() => setCart({}))
  }
  return (
    <>
      <Section>
        <MenuContainer>
          <MenuTitle>CAFÉ DA MANHÃ</MenuTitle>
          {Object.keys(menu).map(
            (key) => (
              key === 'breakfast' &&
              <MenuTable id={key}>
                <tbody>
                  {menu[key].map((item) => (
                    <tr>
                      <td>{item.data().nome}</td>
                      <td>R$ {item.data().valor}</td>
                      <td>
                        < CounterButton handleClick={() => addToCart(item)} value='+' />
                        <Counter
                          type="number" min="0"
                          value={(cart[item.id] && cart[item.id].quantidade) || 0}
                          handleChange={(e) => setAmount(item, e.currentTarget.value)}
                        />
                        < CounterButton handleClick={() => delFromCart(item)} value='-' />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </MenuTable>
            )
          )
          }
        </MenuContainer>
        <MenuContainer>
          <MenuTitle>MENU PRINCIPAL</MenuTitle>
          {Object.keys(menu).map(
            (key) => (
              key !== 'breakfast' &&
              <>
                <MenuCategory>{key}</MenuCategory>
                <MenuTable id={key}>
                  <tbody>
                    {menu[key].map((item) => (
                      <tr>
                        <td>{item.data().nome}</td>
                        <td>R$ {item.data().valor}</td>
                        <td>
                          <CounterButton handleClick={() => addToCart(item)} value='+' />
                          <Counter
                            value={(cart[item.id] && cart[item.id].quantidade) || 0}
                            handleChange={(e) => setAmount(item, e.currentTarget.value)}
                          />
                          <CounterButton handleClick={() => delFromCart(item)} value='-' />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </MenuTable>
              </>
            )
          )
          }
        </MenuContainer>
        <OrderResume>
          <form onSubmit={saveOrder}>
            <div>
              <OrderInput label="Cliente:" type="text" name="Cliente" />
              <OrderInput label="Mesa:" type="number" name="Mesa" />
            </div>
            {emptyCart ? <ErrorMessage text="Seu pedido está vazio" /> : ''}
            <MenuOrder>
              <tbody>
                {printOrder()}
              </tbody>
            </MenuOrder>
            <div>
              <CancelButton type="reset" value='Cancelar' handleClick={() => setCart({})} />
              <ConfirmButton type="submit" value='Confirmar' />
            </div>
          </form>
        </OrderResume>
      </Section>
    </>

  )
}

export default Menu;
