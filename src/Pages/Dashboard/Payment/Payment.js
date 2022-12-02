import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const booking = useLoaderData();
    const { price,  title,  } = booking;

    
    return (
        <div>
            <h2 className='text-3xl mb-3'>Payment for {title}</h2>
            <p className='text-xl'>Please pay <strong>${price}</strong> for your product</p>

            <div className='w-full mt-12 pr-80'>
            <Elements stripe={stripePromise}>
            <CheckoutForm 
                booking={booking}
                />            
            </Elements>
            </div>
        </div>
    );
};

export default Payment;