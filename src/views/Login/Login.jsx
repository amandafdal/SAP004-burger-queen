import React from 'react';
import firebase from '../../firebase';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import serviceRedirect from '../../serviceRedirect';

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
        <input type="email" name="email" autoComplete="email" placeholder="E-mail" />
        <input type="password" name="password" autoComplete="password" placeholder="Password" />
        <button type="submit">Entrar</button>
      </form>
      <p> Não tem uma conta? <Link to="/register">Cadastre-se</Link></p>
    </>
  );
}
const connectedWithRouter = withRouter(Login);
export default connectedWithRouter;