import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import Menu from '../components/Menu';
import OrderResume from '../components/OrderResume';

const Root = styled.div`
  background-color: #0d0d0d;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  li,
  a {
    font-size: 30px;
    color: white;
  }
`;

function Home() {
  return (
    <Root>
      <Header />
      <main>
        < Menu />
        < OrderResume />
      </main>
    </Root>
  );
}

const connectedWithRouter = withRouter(Home);
export default connectedWithRouter;
