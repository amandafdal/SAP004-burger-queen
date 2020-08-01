import React, { useState, useEffect } from 'react';
import firebase from '../firebase';
/* import NavMenu from '../components/NavMenu'; */
import Counter from './Counter/Counter';
import styled from 'styled-components';
import CounterButton from '../components/Counter/CounterButton';

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

const MenuTable = styled.table`
  padding: 10px;
  font-size: 20px;
  font-weight: 600;
  tr {
    height: 40px;
  }
  td {
    padding: 0px 10px;
  }
`;

const Menu = () => {
  /* const [categories, setCategories] = useState([]); */
  const [menu, setMenu] = useState({});
  const [cart, setCart] = useState({});

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
          /* setCategories(allCategories); */
          setMenu(groupMenu);
        }
      )
  };

  useEffect(() => getFoods(), [/* setCategories,  */setMenu]);

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

  console.log(cart)

  return (
    <>
      {/* <NavMenu cat={categories} /> */}
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
              key !== 'breakfast' && key !== 'adicionais' &&
              <>
                <MenuCategory>{key}</MenuCategory>
                <MenuTable id={key}>
                  <tbody>
                    {menu[key].map((item) => (
                      <tr>
                        <td>{item.data().nome}</td>
                        <td>R$ {item.data().valor}</td>
                        <td>
                        < CounterButton handleClick={() => addToCart(item)} value='+' />
                        <Counter
                          value={(cart[item.id] && cart[item.id].quantidade) || 0}
                          handleChange={(e) => setAmount(item, e.currentTarget.value)}
                        />
                        < CounterButton handleClick={() => delFromCart(item)} value='-' />
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
      </Section>
    </>
  )
}

export default Menu;
