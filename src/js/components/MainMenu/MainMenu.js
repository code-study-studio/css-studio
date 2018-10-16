// @flow

import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './MainMenu.scss';

const cx = classNames.bind(styles);

type Props = {
  // onLinkSelect: (id: number) => void,
}

const selectedStyle = cx('menu__link', 'menu__link--active');

const MainMenu = (props: Props) => (
  <nav className={styles.menu}>
    <NavLink to='/' exact activeClassName={selectedStyle}>
      [Home]
    </NavLink>
    <NavLink activeClassName={selectedStyle} to='/about'>
      [About]
    </NavLink>
  </nav>
);

export default MainMenu;