import React from 'react';
import firebase from '../../firebase';
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';

function Register(props) {
  function signUp(e) {
    e.preventDefault();

    const name = e.currentTarget.name.value
    const email = e.currentTarget.email.value
    const password = e.currentTarget.password.value

    firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(
        res => {
          const user = firebase.auth().currentUser;
          user.updateProfile({
            displayName: name,
          })
        }
      )
      .then(
        res => {
          props.history.push('./home');
        }
      )
      .catch();
    }
    
  return (
    <>
      <form onSubmit={signUp}>
        <input type="text" name="name" autoComplete="nome" placeholder="Nome" />
        <input type="email" name="email" autoComplete="email" placeholder="E-mail" />
        <input type="password" name="password" autoComplete="password" placeholder="Password" />
        <button type="submit">Entrar</button>
        <label>
          <input type="radio" name="service" value="attendence" /> 
          Atendimento
        </label>
        <label>
          <input type="radio" name="service" value="kitchen" /> 
          Cozinha
        </label>
      </form>
      <p>Já tem uma conta? <Link to="/login">Faça login</Link></p>
    </>
  );
}

const connectedWithRouter = withRouter(Register);
export default connectedWithRouter;
