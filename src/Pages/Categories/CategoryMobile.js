import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import BookingModal from './BookingModal/BookingModal';
import CategoryMobileCard from './CategoryMobileCard';

const CategoryMobile = () => {
    const categoryMobile = useLoaderData();
    const [bookPhone, setBookPhone] = useState(null)
    const {loading} = useContext(AuthContext)
    if(loading){
        return <h1 className='text-3xl text-secondary flex justify-center items-center font-bold mt-20'>L O A D I N G . . .</h1>
    }
  
    return (
        <div>
            <h2 className='text-3xl text-cyan-600 text-center font-bold mb-16'>This Category Mobile Phones Here.</h2>
        <div className='grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-5'>
            {
                categoryMobile.map(mobile => <CategoryMobileCard
                key={mobile._id}
                mobile={mobile}
                setBookPhone={setBookPhone}
                ></CategoryMobileCard>)
            }
        </div>
        {
            bookPhone &&
            <BookingModal
            bookPhone={bookPhone}
            setBookPhone={setBookPhone}
            ></BookingModal>
        }
        </div>
    );
};

export default CategoryMobile;