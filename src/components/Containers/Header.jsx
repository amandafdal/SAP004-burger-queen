import React from 'react';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import firebase from '../../firebase';
import Logo from '../../assets/img/logo-header1.png';
import Notification from '../../assets/img/notification.png';
import SignOutIcon from '../../assets/icons/SignOutIcon.png';

const StyledHeader = styled.header`
  {
    props.notification &&
      justify-content: space-between;

      .signOutIcon {
        position: relative;
      }
  }

  position: relative;
  display: flex;
  align-items: center;
  background-color: #F2B90C;
  width: 100%;
  height: 60px;

  .logo{
    height: 40px;
    margin: auto;
  }
  .signOutIcon{
    height: 30px;
    margin: 0px 15px;
    position: absolute;
  }

  .notification {
    width: 40px;
    margin: 0px 15px;
  }
`;

const Header = (props) => {
  const history = useHistory();
  const signOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut()
      .then(() => history.push("/login"))
  };

  return (
    <StyledHeader>
      <img className="signOutIcon" src={SignOutIcon} alt="Sair" onClick={signOut} />
      <img className="logo" src={Logo} alt="logo" />
      {
        props.notification &&
          <Link to="/menu">
            <img className="notification" src={Notification} alt="Notificações" />
          </Link>
      }
    </StyledHeader>
  )
}

export default Header;
