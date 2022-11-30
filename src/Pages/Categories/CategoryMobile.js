import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryMobileCard from './CategoryMobileCard';

const CategoryMobile = () => {
    const categoryMobile = useLoaderData();
    return (
        <div className='grid gap-8 grid-cols-3 mx-5'>
            {
                categoryMobile.map(mobile => <CategoryMobileCard
                key={mobile._id}
                mobile={mobile}
                ></CategoryMobileCard>)
            }
        </div>
    );
};

export default CategoryMobile;