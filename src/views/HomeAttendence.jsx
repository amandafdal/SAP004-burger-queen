import React from 'react';
import { withRouter } from 'react-router-dom';
import Root from '../components/Containers/Root';
import Header from '../components/Header';
import Menu from '../components/Menu';

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
