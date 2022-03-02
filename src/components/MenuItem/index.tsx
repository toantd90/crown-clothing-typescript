import React from 'react';

import styles from './styles.module.scss';

type MenuItemProps = {
  title: string;
};

const MenuItem = ({ title }: MenuItemProps) => (
  <div className={styles.menuItem}>
    <div className={styles.content}>
      <h1 className={styles.title}>{title}</h1>
      <span className={styles.subTitle}>SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;
