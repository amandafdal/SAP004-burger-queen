import React, { useState } from 'react';
import firebase from '../../firebase';
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';

function Register(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function signUp(e) {
    e.preventDefault();
    const service =  e.currentTarget.service.value;
    firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(
        () => {
          const user = firebase.auth().currentUser.uid;
          firebase.firestore().collection('employee').doc(user).set({
            name: name,
            service: service,
          }) 
        }
      )
      .then(
          () => {
          props.history.push('./home');
        }
      )
      .catch();
    }
    
  return (
    <>
      <form onSubmit={signUp}>
        <input type="text" name="name" autoComplete="nome" placeholder="Nome" onChange={(e) => setName(e.target.value)} />
        <input type="email" name="email" autoComplete="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" name="password" autoComplete="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
        <label>
          <input type="radio" name="service" value="Atendimento" /> 
          Atendimento
        </label>
        <label>
          <input type="radio" name="service" value="Cozinha" /> 
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
