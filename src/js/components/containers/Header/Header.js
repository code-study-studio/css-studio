// @flow
import React from 'react';
import MainMenu from '../../MainMenu/MainMenu';
import styles from './Header.module.scss';

type Props = {
}

const Header = (props: Props) => (
  <header className={styles.header}>
    <div className={styles.container}>
      <MainMenu />
    </div>
  </header>
);

export default Header;

