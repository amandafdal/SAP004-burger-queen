import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../components/Containers/Header';
import Root from '../components/Containers/Root';
import KitchenOrders from '../components/Containers/KitchenOrders';

function Home() {
  return (
    <Root>
      <Header />
      <KitchenOrders />
    </Root>
  );
}

const connectedWithRouter = withRouter(Home);
export default connectedWithRouter;