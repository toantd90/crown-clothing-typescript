import { FormEvent, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

import Button from 'components/Button';

import { useAppSelector } from 'store/hooks';
import { selectCartTotal } from 'store/cart/slice';
import { selectCurrentUser } from 'store/user/slice';

import styles from './paymentForm.module.scss';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useAppSelector(selectCartTotal);
  const currentUser = useAppSelector(selectCurrentUser);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const handlePayment = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setIsProcessingPayment(true);

    const response = await fetch('/.netlify/functions/createPaymentIntent', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => res.json());

    const { client_secret } = response.paymentIntent;

    const cardDetails = elements.getElement(CardElement);

    if (!cardDetails) return;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: cardDetails,
        billing_details: {
          name:
            currentUser && currentUser.displayName
              ? currentUser.displayName
              : 'Guest',
        },
      },
    });

    if (paymentResult.error) {
      console.log(JSON.stringify(paymentResult.error));

      alert(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        alert('Payment Successful');
      }
    }

    setIsProcessingPayment(false);
  };

  return (
    <div className={styles.paymentFormContain}>
      <form className={styles.formContainer} onSubmit={handlePayment}>
        <h2>Credit Card Payment: </h2>
        <CardElement />
        <Button buttonType='inverted' disabled={isProcessingPayment}>
          Pay Now
        </Button>
      </form>
    </div>
  );
};

export default PaymentForm;
