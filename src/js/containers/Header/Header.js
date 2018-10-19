// @flow
import React from 'react';
import MainMenu from '../../components/MainMenu/MainMenu';
import Logo from '../../components/Logo/Logo';
import styles from './Header.scss';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.container}>
      <Logo />
      <MainMenu />
    </div>
  </header>
);

export default Header;

