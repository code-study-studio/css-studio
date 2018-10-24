// @flow

import React from 'react';
import PageTemplate from '../../containers/PageTemplate/PageTemplate.js';
import HomeMenu from '../HomeMenu/HomeMenu';
import styles from './Home.scss';

const Home = () => (
  <PageTemplate>
    <section className={styles.content}>
      <h1>[Home]</h1>
      <HomeMenu />
    </section>
  </PageTemplate>
);

export default Home;
