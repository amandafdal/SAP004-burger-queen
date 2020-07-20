import React, { useState }  from 'react';
import firebase from '../../firebase';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function signIn(e) {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(
      () => {
        props.history.push('./home');
      }
    )
    .catch();
  }
  return (
    <>
      <form onSubmit={signIn}>
        <input type="email" name="email" autoComplete="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" name="password" autoComplete="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit">Entrar</button>
      </form>
      <p> Não tem uma conta? <Link to="/register">Cadastre-se</Link></p>
    </>
  );
}

const connectedWithRouter = withRouter(Login);

export default connectedWithRouter;
