// @flow
import React from 'react';
import styles from './Logo.scss';
import logo from './logo.jpg';
import logox2 from './logo@2x.jpg';

const Logo = () => (
  <picture className={styles.logo}>
    <source srcSet={`${logox2} 2x, ${logo} 1x`} />
    <img src={logo} alt='logotype' />
  </picture>
);

export default Logo;
