import { MenuItem as MenuItemType } from 'constants/menuItem';
import styles from './menuItem.module.scss';

type Props = {
  data: MenuItemType;
};

const MenuItem = ({ data }: Props) => {
  const { title, imageUrl, size } = data;

  return (
    <div
      className={`${styles.menuItem} ${size ? styles[size] : ''}`}
    >
      <div className={styles.backgroundImage} style={{ backgroundImage: `url(${imageUrl})` }}/>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <span className={styles.subTitle}>SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
