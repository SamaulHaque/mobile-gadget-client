import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
    const { id, name, image } = category;
    return (
        <Link to={`/category-mobile/${id}`} >
        <div className="card w-full bg-base-100 shadow-xl" data-aos="fade-up"
                    data-aos-easing="ease-out-cubic" data-aos-duration="1000">
            <figure><img src={image} alt="phone-img" className='h-64'/></figure>
            <div className="card-body">
                <h2 className="card-title text-center text-blue-600 flex justify-between"><span>{name}</span> <span>See All</span></h2>
            </div>
        </div>
        </Link>
    );
};

export default Category;