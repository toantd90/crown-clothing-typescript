import { useState } from 'react';

import { MenuItem } from 'components';

import styles from './styles.module.scss';

type Item = {
  title: string;
  imageUrl: string;
  id: number;
};

const Directory = () => {
  const [menuItems, setMenuItems] = useState<Array<Item>>([
    { title: 'First Item', imageUrl: '', id: 1 },
  ]);

  console.log(menuItems)
  return (
    <div className={styles.directoryMenu}>
      {menuItems.map((menuItem) => (
        <MenuItem key={menuItem.id} title={menuItem.title} />
      ))}
    </div>
  );
};

export default Directory;
