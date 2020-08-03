import React, { useState } from 'react';
import firebase from '../firebase';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import serviceRedirect from '../serviceRedirect';
import Input from '../components/Inputs/Input';
import PasswordInput from '../components/Inputs/PasswordInput';
import ServiceOpt from '../components/Inputs/ServiceOpt';
import SignButton from '../components/Buttons/SignButton';
import ErrorMessage from '../components/Messages/ErrorMessage';
import Logo from '../components/Logos/Logo';
import Root from '../components/Containers/Root';
import SignForm from '../components/Containers/SignForm';
import SignMessage from '../components/Messages/SignMessage';

const SignUp = styled.main`
  background-color: #fff;
  height: 780px;
  width: 80%;
  margin-top: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

function Register(props) {
  const [err, setError] = useState(false);

  function signUp(e) {
    e.preventDefault();

    const name = e.currentTarget.name.value
    const email = e.currentTarget.email.value
    const password = e.currentTarget.password.value
    const service = e.currentTarget.service.value;

    if (email.match(/(.*@burgerqueen.com)/)) {
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
        .then(() => serviceRedirect(props))
        .catch();
    } else {
      setError(true);
    }
  }

  return (
    <Root>
      <SignUp>
        <Logo />
        <SignForm handleSubmit={signUp}>
          <Input label="Nome" type="text" name="name" autoComplete="nome" />
          <Input label="E-mail" type="email" name="email" autoComplete="email" />
          <PasswordInput label="Senha" name="password" autoComplete="password" icon="icon-eye" />
          <ServiceOpt />
          {err ? <ErrorMessage text="Favor insira seu e-mail corporativo." /> : ''}
          <SignButton type="submit" text="Cadastrar" />
        </SignForm>
        <SignMessage text={"Já tem uma conta?"} link={"/login"} linkText={"Faça login"} />
      </SignUp>
    </Root>
  );
}
const connectedWithRouter = withRouter(Register);
export default connectedWithRouter;