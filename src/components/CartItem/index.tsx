import styles from './cartItem.module.scss';

type Props = {
  cartItem: {
    name: string;
    quantity: number;
    price: number;
    imageUrl: string;
  };
};

const CartItem = ({ cartItem }: Props) => {
  const { name, quantity, price, imageUrl } = cartItem;

  return (
    <div className={styles.cartItemContainer}>
      <img src={imageUrl} alt={`${name}`} />
      <div className={styles.itemDetails}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
