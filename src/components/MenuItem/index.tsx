import { useNavigate } from 'react-router-dom';

import { MenuItem as MenuItemType } from 'constants/menuItem';
import styles from './menuItem.module.scss';

type Props = {
  data: MenuItemType;
};

const MenuItem = ({ data }: Props) => {
  const { title, imageUrl, size, linkUrl } = data;

  const navigate = useNavigate();

  return (
    <div
      className={`${styles.menuItem} ${size ? styles[size] : ''}`}
      onClick={() => navigate(linkUrl)}
    >
      <div
        className={styles.backgroundImage}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <span className={styles.subTitle}>SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
