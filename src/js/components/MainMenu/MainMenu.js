// @flow

import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './MainMenu.scss';

const MainMenu = () => (
  <nav className={styles.topmenu}>
    <NavLink
      exact
      activeClassName={styles.active}
      className={styles.link}
      to='/'
      >
      Home
    </NavLink>
    <NavLink
      activeClassName={styles.active}
      className={styles.link}
      to='about'
      >
      About
    </NavLink>
    <NavLink
      activeClassName={styles.active}
      className={styles.link}
      to='/gallery'
      >
      Gallery
    </NavLink>
    <NavLink
      activeClassName={styles.active}
      className={styles.link}
      to='/works'
      >
      Works
    </NavLink>
    <NavLink
      activeClassName={styles.active}
      className={styles.link}
      to='./contacts'
      >
      Contacts
    </NavLink>
  </nav>
);

export default MainMenu;
