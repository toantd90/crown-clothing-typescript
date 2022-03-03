import { MenuItem as MenuItemType } from 'constants/menuItem';
import styles from './styles.module.scss';

type Props = {
  data: MenuItemType;
};

const MenuItem = ({ data }: Props) => {
  const { title } = data;
  return (
    <div className={styles.menuItem}>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <span className={styles.subTitle}>SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
