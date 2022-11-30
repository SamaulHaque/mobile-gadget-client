import React from 'react';

const CategoryMobileCard = ({ mobile }) => {
    const { title, img } = mobile;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="mobile-img" className='h-80'/></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p></p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default CategoryMobileCard;