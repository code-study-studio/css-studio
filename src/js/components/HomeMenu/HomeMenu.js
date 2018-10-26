// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomeMenu.scss';

const firstDataSet = [
  {id: 1, to: '/works?sort=name', style: 'one', label: 'one'},
  {id: 2, to: '/works?sort=name', style: 'two', label: 'two'},
];

const secondDataSet = [
  {id: 1, to: '/works?sort=name', label: 'one'},
  {id: 2, to: '/works?sort=name', label: 'two'},
];

const linksList = (data) => {
  return data.map(link => {
    const {id, to, label} = link;
    return (
      <li className={styles.list__elem} key={id}>
        <Link className={styles.link} href='/' to={to}>
          <span className={styles.label}>{label}</span>
        </Link>
      </li>
    );
  });
};

const HomeMenu = () => (
  <nav className={styles.menu}>
    <ul className={`${styles.list} ${styles.list_direct} `}>
      {linksList(firstDataSet)}
    </ul>
    <ul className={`${styles.list} ${styles.list_turned} `}>
     d
    </ul>
  </nav>
);

export default HomeMenu;
