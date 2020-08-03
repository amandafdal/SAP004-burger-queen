import React from 'react';
import { withRouter } from 'react-router-dom';
import Root from '../components/Containers/Root';
import Header from '../components/Containers/Header';
import Menu from '../components/Containers/Menu';

function Home() {
  return (
    <Root>
      <Header />
      <Menu />
    </Root>
  );
}

const connectedWithRouter = withRouter(Home);
export default connectedWithRouter;
