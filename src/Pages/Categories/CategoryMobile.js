import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal/BookingModal';
import CategoryMobileCard from './CategoryMobileCard';

const CategoryMobile = () => {
    const categoryMobile = useLoaderData();
    const [bookPhone, setBookPhone] = useState(null)
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