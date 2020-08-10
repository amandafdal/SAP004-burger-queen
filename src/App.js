import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Register from './views/Register';
import Login from './views/Login';
import HomeKitchen from './views/HomeKitchen';
import HomeAttendence from './views/HomeAttendence';
import Menu from './views/Notification/Menu';
import Notification from './views/Notification/Notification';
import Historic from './views/Notification/Historic';

function App() {
  const PrivateRoute = ({component: Component, ...rest}) => {
    return (
      <Route {...rest} render={props => (
        localStorage.user ?
          <Component {...props} />
        : <Redirect to="/login" />
      )} />
    );
};

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={Login} />
        <Route path="/register" render={Register} />
        <Route path="/login" render={Login} />
        <PrivateRoute path="/kitchen" component={HomeKitchen} />
        <PrivateRoute path="/attendence" component={HomeAttendence} />
        <PrivateRoute path="/menu" component={Menu} />
        <PrivateRoute path="/notification" component={Notification} />
        <PrivateRoute path="/historic" component={Historic} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;