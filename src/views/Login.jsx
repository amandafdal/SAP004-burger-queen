import React, { useState }from 'react';
import firebase from '../firebase';
import { Link, withRouter } from 'react-router-dom';
import serviceRedirect from '../serviceRedirect';
import Input from '../components/Inputs/Input';
import PasswordInput from '../components/Inputs/PasswordInput';
import SignButton from '../components/Buttons/SignButton';
import ErrorMessage from '../components/Errors/ErrorMessage';
import Logo from '../components/Logos/Logo';
import styled from 'styled-components';

const SignIn = styled.main`
  background-color: #fff;
  height: 780px;
  width: 80%;
  margin-top: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  color: #0D0D0D;
  font-size: 25px;
  font-weight: 900;
`;

const Paragraph = styled.p`
  color: #0D0D0D;
  font-size: 25px;
  font-weight: 900;
  margin-bottom: 45px;
`;

const STyledLink = styled(Link)`
  color: #F28907;
`;

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
    <SignIn>
      <Logo />
      <Form onSubmit={signIn}>
        <Input label="E-mail" type="email" name="email" autoComplete="email" />
        <PasswordInput label="Senha" name="password" autoComplete="password" icon="icon-eye"/>
        {err ? <ErrorMessage text="Email e/ou senha incorretos."/> : ''}
        <SignButton type="submit" text="Entrar" /> 
      </Form>
      <Paragraph> Não tem uma conta? <STyledLink to="/register">Cadastre-se</STyledLink></Paragraph>
    </SignIn>
  );
}
const connectedWithRouter = withRouter(Login);
export default connectedWithRouter;