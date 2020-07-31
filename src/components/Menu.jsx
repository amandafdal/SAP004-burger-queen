import React, { useState, useEffect } from 'react';
import firebase from '../firebase';
import NavMenu from '../components/NavMenu';
import Counter from './Counter/Counter';

const Menu = () => {
  const [categories, setCategories] = useState([]);
  const [menu, setMenu] = useState({});

  const getFoods = () => {
    firebase.firestore().collection('foods').get()
      .then(
        (querySnapshot) => {
          const allCategories = Array.from(
            new Set([...querySnapshot.docs.map(item => item.data().categoria)])
          );
          const groupMenu = allCategories.reduce((acc, cur) => {
            acc[cur] = querySnapshot.docs
              .filter(item => cur === item.data().categoria);
            return acc;
          }, {});
          setCategories(allCategories);
          setMenu(groupMenu);
        }
      )
  };

  useEffect(() => getFoods(), [setCategories, setMenu]);

  return (
    <>
    <NavMenu cat={categories} />
    <section id="menu"> {
      Object.keys(menu).map(
        (key) => (
          <ul id={key}> {menu[key].map((item) => (
            <li>
              {item.data().nome}
              {item.data().valor}
              < Counter item={item}/>
            </li>))}
          </ul>
        )
      )}
    </section>
    </>
  )
}

export default Menu;
