import React from 'react';
import firebase from '../../firebase';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import serviceRedirect from '../../serviceRedirect';
import Input from '../../components/Input/Input';
import Button from '../../components/Buttons/SignButton';

function Login(props) {
  function signIn(e) {
    e.preventDefault();
    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(
      () => {
        serviceRedirect(props);
      }
    )
    .catch();
  }
  return (
    <>
      <form onSubmit={signIn}>
        <Input label = "E-mail"type="email" name="email" autoComplete="email" />
        <Input label = "Senha"type="password" name="password" autoComplete="password" />
        <Button type="submit" text="Entrar" /> 
      </form>
      <p> Não tem uma conta? <Link to="/register">Cadastre-se</Link></p>
    </>
  );
}
const connectedWithRouter = withRouter(Login);
export default connectedWithRouter;