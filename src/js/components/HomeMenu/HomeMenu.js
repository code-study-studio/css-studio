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
        <Link href='/' to={to}>
          <svg
            className='svg-elem animated infinite slow rotateInBack'
            width='60'
            height='60'
            viewport='100, 100'
            >
            <circle
              width='60'
              height='60'
              className='svg-circle'
              cx='30'
              cy='30'
              r='26'
              fill='none'
              strokeDasharray='25, 15'
            />
          </svg>
          <span>{label}</span>
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
