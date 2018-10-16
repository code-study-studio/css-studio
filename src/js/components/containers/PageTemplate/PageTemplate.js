// @flow
import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './PageTemplate.module.scss';

type Props = {
  children: React.ChildrenArray<React.Element>
}

const PageTemplate = ({children}: Props) => (
  <div className={styles.wrapper}>
    <Header/>
    <main className={styles.main}>
      <div className={styles.container}>
        {children}
      </div>
    </main>
    <Footer/>
  </div>
);

export default PageTemplate;
