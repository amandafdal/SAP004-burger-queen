import React from 'react';
import Header from '../components/Header'
import firebase from '../firebase';
import styled from 'styled-components';

const Root = styled.div`
  background-color: #0d0d0d;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

function Home() {
  const getBreakfast = () => {
    firebase.firestore().collection('breakfast').get().then(
      (querySnapshot) => querySnapshot.forEach(
        (doc) => console.log("Item: ", doc.data().Item ,  "R$:", doc.data().Valor)
      )
    )
  };
  getBreakfast();

  const getBurgers = () => {
    firebase.firestore().collection('all-day').where('Categoria', '==', 'Hambúrguer').get().then(
      (querySnapshot) => querySnapshot.forEach(
        (doc) => console.log("Item: ", doc.data().Item ,  "R$:", doc.data().Valor)
      )
    )
  };
  getBurgers();
  
  const getToppings = () => {
    firebase.firestore().collection('all-day').where('Categoria', '==', 'Adicionais').get().then(
      (querySnapshot) => querySnapshot.forEach(
        (doc) => console.log("Item: ", doc.data().Item ,  "R$:", doc.data().Valor)
      )
    )
  };
  getToppings();

  const getSideDisches = () => {
    firebase.firestore().collection('all-day').where('Categoria', '==', 'Acompanhamentos').get().then(
      (querySnapshot) => querySnapshot.forEach(
        (doc) => console.log("Item: ", doc.data().Item ,  "R$:", doc.data().Valor)
      )
    )
  };
  getSideDisches();



  return (
    <Root>
      <Header />
      <main>
        <nav>
          <ul>
            <li>
              <a href="#breakfast">Café da manhã</a>
            </li>
            <li>
              <a href="#burgers">Hambúrguer</a>
            </li>
            <li>
              <a href="#toppings">Adicionais</a>
            </li>
            <li>
              <a href="#side-dishes">Acompanhamentos</a>
            </li>
            <li>
              <a href="#drinks">Bebidas</a>
            </li>
          </ul>
        </nav>
        <section>
          <ul id="breakfast"></ul>
          {/* criar LIs usando um forEach firebase  render() 
            <p>  props.texto = = itemvalue</p>
            <p> props.price = = valorvalue</p>
            < Counter <btn- contador numerico btn +/>
            */}
          <ul id="burgers"></ul>
          <ul id="toppings"></ul>
          <ul id="side-dishes"></ul>
          <ul id="#drinks"></ul>
        </section>
        <section>
          {/* order-resume */}
        </section>
      </main>
    </Root>
  );
}

export default Home;