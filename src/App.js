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
