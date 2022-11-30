import React, { useEffect, useState } from 'react';
import Category from './Category';

const Categories = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className='mx-5'>
            <h2 className='text-4xl text-cyan-600 text-center font-bold mb-16'>Brand Categories</h2>            
            
            <div className='grid grid-cols-3 gap-4'>
            {
                categories.map(category => <Category
                    key={category.id}
                    category={category}
                ></Category>)
            }
            </div>

        </div>
    );
};

export default Categories;