import React from 'react';

// import styles from './cartItem.module.scss';

type Props = {
  cartItem: {
    name: string;
    quantity: number;
  };
};

const CartItem = ({ cartItem }: Props) => {
  const { name, quantity } = cartItem;

  return (
    <div>
      <h2>{name}</h2>
      <span>{quantity}</span>
    </div>
  );
};

export default CartItem;
