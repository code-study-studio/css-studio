// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomeMenu.scss';

const firstDataSet = [
  {id: 1, to: '/works?sort=name', position: 'top-left', label: 'one'},
  {id: 2, to: '/works?sort=name', position: 'top-right', label: 'two'},
  {id: 3, to: '/works?sort=name', position: 'bottom-left', label: 'three'},
  {id: 4, to: '/works?sort=name', position: 'bottom-right', label: 'four'},
];

const secondDataSet = [
  {id: 1, to: '/works?sort=name', position: 'top-left', label: 'one'},
  {id: 2, to: '/works?sort=name', position: 'top-right', label: 'two'},
  {id: 3, to: '/works?sort=name', position: 'bottom-left', label: 'three'},
  {id: 4, to: '/works?sort=name', position: 'bottom-right', label: 'four'},
];

const linksList = (data) => {
  return data.map(link => {
    const {id, to, label, position} = link;
    return (
      <li
        className={`${styles.menu__elem} ${styles[`menu__elem_${position}`]}`}
        key={id}
        >
        <Link className={styles.menu__link} href='/' to={to}>
          <span className={styles.menu__label}>{label}</span>
        </Link>
      </li>
    );
  });
};

const HomeMenu = () => (
  <nav className={styles.menu}>
    <ul className={`${styles.menu__list} ${styles.menu__list_direct} `}>
      {linksList(firstDataSet)}
    </ul>
    <ul className={`${styles.menu__list} ${styles.menu__list_turned} `}>
      {linksList(secondDataSet)}
    </ul>
  </nav>
);

export default HomeMenu;
