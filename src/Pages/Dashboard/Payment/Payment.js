import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
// import Loading from '../../Shared/Loading/Loading';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const booking = useLoaderData();
    console.log(booking)
    // const navigation = useNavigation();
    const { price,  title,  } = booking;

    // if(navigation.state === "loading"){
    //     return <Loading></Loading>
    // }
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