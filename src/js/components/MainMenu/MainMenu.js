// @flow

import React from 'react';
import { NavLink } from 'react-router-dom';
import './MainMenu.scss';

type Props = {
  // onLinkSelect: (id: number) => void,
}

const selectedStyle = {
  backgroundColor: 'white',
  color: 'slategray',
};

const MainMenu = (props: Props) => (
  <nav className='menu'>
    <NavLink activeStyle={selectedStyle} to='/'>
      [Home]
    </NavLink>
  </nav>
);

export default MainMenu;