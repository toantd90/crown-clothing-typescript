import React from 'react';
import Directory from 'components/Directory';
import styles from './homePage.module.scss';

const HomePage = () => (
  <div className={styles.homepage}>
    <Directory />
  </div>
);

export default HomePage;
