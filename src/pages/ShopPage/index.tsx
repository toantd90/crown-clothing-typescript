import React, { useState } from 'react';

import { CollectionPreview } from 'components';

import { SHOP_DATA } from './shop.data';

import styles from './shopPage.module.scss';

const ShopPage = () => {
  const [collections, setCollections] = useState(SHOP_DATA);
  return (
    <div className={styles.shopPage}>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default ShopPage;
