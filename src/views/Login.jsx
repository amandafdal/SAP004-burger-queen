import React, { useState } from 'react';
import firebase from '../firebase';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import serviceRedirect from '../serviceRedirect';
import Input from '../components/Inputs/Input';
import PasswordInput from '../components/Inputs/PasswordInput';
import SignButton from '../components/Buttons/SignButton';
import ErrorMessage from '../components/Messages/ErrorMessage';
import Logo from '../components/Logos/Logo';
import Root from '../components/Containers/Root';
import SignForm from '../components/Containers/SignForm';

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
  const [err, setError] = useState(false);
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
    <Root>
      <SignIn>
        <Logo />
        <SignForm handleSubmit={signIn}>
          <Input label="E-mail" type="email" name="email" autoComplete="email" />
          <PasswordInput label="Senha" name="password" autoComplete="password" icon="icon-eye" />
          {err ? <ErrorMessage text="Email e/ou senha incorretos." /> : ''}
          <SignButton type="submit" text="Entrar" />
        </SignForm>
        <Paragraph> Não tem uma conta? <STyledLink to="/register">Cadastre-se</STyledLink></Paragraph>
      </SignIn>
    </Root>
  );
}
const connectedWithRouter = withRouter(Login);
export default connectedWithRouter;