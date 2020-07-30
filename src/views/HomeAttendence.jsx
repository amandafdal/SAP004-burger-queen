import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../components/Header';
import firebase from '../firebase';
import styled from 'styled-components';

const Root = styled.div`
  background-color: #0d0d0d;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  li,
  a {
    font-size: 30px;
    color: white;
  }
`;

function Home() {
  const [categories, setCategories] = useState([]);
  const [menu, setMenu] = useState({});
  const [cart, setCart] = useState({});

  useEffect(
    () => {
      const getFoods = () => {
        firebase
          .firestore()
          .collection('foods')
          .get()
          .then(
            (querySnapshot) => {
              const allCategories = Array.from(
                new Set([...querySnapshot.docs.map(item => item.data().categoria)])
              );

              setCategories(allCategories);

              const groupMenu = allCategories.reduce((acc, cur) => {
                acc[cur] = querySnapshot.docs
                  .filter(item => cur === item.data().categoria);
                return acc;
              }, {});

              setMenu(groupMenu);
            }
          )
      };
      getFoods();
    }, [setCategories, setMenu]
  );

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
          nome: item.data().valor,
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
    <Root>
      <Header />
      <main>
        <nav>
          <ul>
            {
              categories.map(
                (item) => (
                  <li>
                    <a href={`#${item}`}>{item}</a>
                  </li>
                )
              )
            }
          </ul>
        </nav>
        <section id="menu">
          {
            Object.keys(menu).map(
              (key) => (
                <ul id={key}>
                  {
                    menu[key].map(
                      (item) => (
                        <li>
                          {item.data().nome}
                          {item.data().valor}
                          <button type="button" onClick={() => addToCart(item)}>Adicionar</button>
                          <input
                            type="number"
                            value={cart[item.id] && cart[item.id].quantidade || 0}
                            onChange={(e) => setAmount(item, e.currentTarget.value)}
                          />
                          <button type="button" onClick={() => delFromCart(item)}>remover</button>
                        </li>
                      )
                    )
                  }
                </ul>
              )
            )
          }
        </section>
        <section id="order-resume"></section>
      </main>
    </Root>
  );
}

const connectedWithRouter = withRouter(Home);

export default connectedWithRouter;
/* say hi to new branch */