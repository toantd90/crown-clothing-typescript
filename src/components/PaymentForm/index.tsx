import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import Button from 'components/Button';

import styles from './paymentForm.module.scss';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handlePayment = async () => {
    // e.preventDefault();

    if (!stripe || !elements) return;
  };

  return (
    <div className={styles.paymentFormContain}>
      <div className={styles.formContainer}>
        <h2>Credit Card Payment: </h2>
        <CardElement />
        <Button buttonType='inverted'>Pay Now</Button>
      </div>
    </div>
  );
};

export default PaymentForm;
