import React from 'react';

import styles from './collectionItem.module.scss';

type Props = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
};

const CollectionItem = ({ id, name, price, imageUrl }: Props) => {
  return (
    <div className={styles.collectionItem}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className={styles.collectionFooter}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>{price}</span>
      </div>
    </div>
  );
};

export default CollectionItem;
