import React from 'react';
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

export default Home;