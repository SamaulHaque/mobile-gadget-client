import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
    const { id, name, image } = category;
    console.log(category)
    return (
        <Link to={`/category-mobile/${id}`} >
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="phone-img" className='h-64' /></figure>
            <div className="card-body">
                <h2 className="card-title text-center">{name}</h2>
            </div>
        </div>
        </Link>
    );
};

export default Category;