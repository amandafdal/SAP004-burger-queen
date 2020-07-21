import React from 'react';
import firebase from '../../firebase';
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import serviceRedirect from '../../serviceRedirect';

function Register(props) {
  function signUp(e) {
    e.preventDefault();

    const name = e.currentTarget.name.value
    const email = e.currentTarget.email.value
    const password = e.currentTarget.password.value
    const service = e.currentTarget.service.value;

    firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(
        () => {
          const user = firebase.auth().currentUser.uid;
          firebase.firestore().collection('employee').doc(user).set({
            name: name,
            service: service,
          })
        })
      .then(
        () => {
          serviceRedirect(props);
        })
      .catch();
  }

  return (
    <>
      <form onSubmit={signUp}>
        <input type="text" name="name" autoComplete="nome" placeholder="Nome" />
        <input type="email" name="email" autoComplete="email" placeholder="E-mail" />
        <input type="password" name="password" autoComplete="password" placeholder="Password" />
        <label>
          <input type="radio" name="service" value="atendente" />
          Atendimento
        </label>
        <label>
          <input type="radio" name="service" value="chef" />
          Cozinha
        </label>
        <button type="submit">Entrar</button>
      </form>
      <p>Já tem uma conta? <Link to="/login">Faça login</Link></p>
    </>
  );
}
const connectedWithRouter = withRouter(Register);
export default connectedWithRouter;