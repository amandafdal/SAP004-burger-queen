import React from 'react';
import firebase from '../../firebase';
import { Link, withRouter } from 'react-router-dom';
import serviceRedirect from '../../serviceRedirect';
import Input from '../../components/Input/Input';
import SignButton from '../../components/Buttons/SignButton';
import Logo from '../../img/logo.png';

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
    <main>
      <img className="logo" src={Logo} alt="Logo" />
      <form onSubmit={signIn}>
        <Input label = "E-mail"type="email" name="email" autoComplete="email" />
        <Input label = "Senha"type="password" name="password" autoComplete="password" />
        <SignButton type="submit" text="Entrar" /> 
      </form>
      <p> Não tem uma conta? <Link className="link" to="/register">Cadastre-se</Link></p>
    </main>
  );
}
const connectedWithRouter = withRouter(Login);
export default connectedWithRouter;