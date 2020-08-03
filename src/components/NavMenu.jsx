import React from 'react';

const NavMenu = (props) => {
  return (
    <nav>
      <ul>
        {
          props.cat.map(
            (item) => (
              <li>
                <a href={`#${item}`}>{item}</a>
              </li>
            )
          )
        }
      </ul>
    </nav>
  )
}

export default NavMenu;