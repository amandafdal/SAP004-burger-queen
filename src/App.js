import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Register from './views/Register/Register';
import Login from './views/Login/Login';
import HomeKitchen from './views/HomeKitchen/HomeKitchen';
import HomeAttendence from './views/HomeAttendence/HomeAttendence';
import firebase from './firebase';

function App() {
  /* let serviceRoute;
  firebase.auth().onAuthStateChanged(user => {
    if(user){
      const uid = firebase.auth().currentUser.uid;
      const docService = firebase.firestore().collection('employee').doc(uid).get().then(doc => doc.data().service);
      docService === 'Cozinha' ? serviceRoute = HomeKitchen : serviceRoute = HomeAttendence;
    }
    serviceRoute = '/';
  }) */

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={Login} />
        <Route path="/register" render={Register} />
        <Route path="/login" render={Login} />
        <Route path="/HomeKitchen" render={HomeKitchen} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

/* 
import React from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Register from './views/Register/Register';
import Login from './views/Login/Login';
import Home from './views/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/register" render={Register} />
        <Route path="/login" render={Login} />
        <Route path="/home" render={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
 */