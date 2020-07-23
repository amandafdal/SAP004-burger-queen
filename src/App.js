import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Register from './views/Register';
import Login from './views/Login';
import HomeKitchen from './views/HomeKitchen';
import HomeAttendence from './views/HomeAttendence';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={Login} />
        <Route path="/register" render={Register} />
        <Route path="/login" render={Login} />
        <Route path="/kitchen" render={HomeKitchen} />
        <Route path="/attendence" render={HomeAttendence} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;