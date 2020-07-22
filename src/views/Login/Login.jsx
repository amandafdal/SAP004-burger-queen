import React, { useState }from 'react';
import firebase from '../../firebase';
import { Link, withRouter } from 'react-router-dom';
import serviceRedirect from '../../serviceRedirect';
import Input from '../../components/Input/Input';
import PasswordInput from '../../components/Input/PasswordInput';
import SignButton from '../../components/Buttons/SignButton';
import ErrorMessage from '../../components/Errors/ErrorMessage';
import Logo from '../../assets/img/logo.png';
import '../../styles/sign.css';

function Login(props) {
  let [err, setError] = useState(false);
  function signIn(e) {
    e.preventDefault();
    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;

    firebase.auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => serviceRedirect(props))
    .catch(() => setError(true));
  }
  return (
    <main className="main-signin">
      <img className="logo" src={Logo} alt="Logo" />
      <form className="form-sign" onSubmit={signIn}>
        <Input label = "E-mail"type="email" name="email" autoComplete="email" />
        <PasswordInput label="Senha" name="password" autoComplete="password" icon="icon-eye"/>
        {err ? <ErrorMessage text="Email e/ou senha incorretos."/> : ''}
        <SignButton type="submit" text="Entrar" /> 
      </form>
      <p className="sign-redirect"> Não tem uma conta? <Link className="link" to="/register">Cadastre-se</Link></p>
    </main>
  );
}
const connectedWithRouter = withRouter(Login);
export default connectedWithRouter;