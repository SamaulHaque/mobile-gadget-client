import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryMobileCard from './CategoryMobileCard';

const CategoryMobile = () => {
    const categoryMobile = useLoaderData();
    return (
        <div>
            <h2 className='text-4xl text-cyan-600 text-center font-bold mb-16'>This Category Mobile Phones Here.</h2>
        <div className='grid gap-8 grid-cols-3 mx-5'>
            {
                categoryMobile.map(mobile => <CategoryMobileCard
                key={mobile._id}
                mobile={mobile}
                ></CategoryMobileCard>)
            }
        </div>
        </div>
    );
};

export default CategoryMobile;