import React from 'react';

import styles from './collectionPreview.module.scss';

type Props = {
  title: string;
  items: Array<any>;
};

const CollectionPreview = ({ title, items }: Props) => {
  return (
    <div className={styles.collectionPreview}>
      <h1 className={styles.title}>{title.toUpperCase()}</h1>
      <div className={styles.preview}>
        {items
          .filter((_, index) => index < 4)
          .map(({ id, name }) => (
            <div key={id}>{name}</div>
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
