import React from 'react';
import firebase from '../../firebase';
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import serviceRedirect from '../../serviceRedirect';
import Input from '../../components/Input/Input';
import SignButton from '../../components/Buttons/SignButton';
import './Registro.css';

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
    <main>
      <form onSubmit={signUp}>
        <Input label="Name" type="text" name="name" autoComplete="nome" />
        <Input label="E-mail" type="email" name="email" autoComplete="email" />
        <Input label="Senha" type="password" name="password" autoComplete="password" />
        <label>
          <input type="radio" name="service" value="atendente" />
          Atendimento
        </label>
        <label>
          <input type="radio" name="service" value="chef" />
          Cozinha
        </label>
        <SignButton type="submit" text="Cadastrar" />
      </form>
      <p>Já tem uma conta? <Link to="/login">Faça login</Link></p>
    </main>
  );
}
const connectedWithRouter = withRouter(Register);
export default connectedWithRouter;