import { useNavigate } from 'react-router-dom';

import { MenuItem as MenuItemType } from 'constants/menuItem';

import styles from './directoryItem.module.scss';

type Props = {
  data: MenuItemType;
};

const DirectoryItem = ({ data }: Props) => {
  const { title, imageUrl, size, linkUrl } = data;

  const navigate = useNavigate();

  const handleOnNavigate = () => navigate(linkUrl);

  return (
    <div
      className={`${styles.directoryItemContainer} ${size ? styles[size] : ''}`}
      onClick={handleOnNavigate}
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

export default DirectoryItem;
