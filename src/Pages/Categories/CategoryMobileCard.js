import React from 'react';

const CategoryMobileCard = ({ mobile, setBookPhone}) => {
    const { title, img, location, resale_price, original_price, Used, posted_time, seller_name } = mobile;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="mobile-img" className='h-80' /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>
                    <span>Original Price: <b>{original_price}</b> Taka</span> <br />
                    <span>Resale Price: <b>{resale_price}</b> Taka</span> <br />
                    <span>Used: <b>{Used}</b></span> <br />
                    <span>Posted Time: <b>{posted_time}</b></span> <br />
                    <span>Location: <b>{location}</b></span> <br />
                    <span>Seller Name: <b>{seller_name}</b></span>
                     </p>
                    <div className="card-actions justify-end">
                        <label
                        onClick={()=>setBookPhone(mobile)}
                        htmlFor="booking-modal"
                         className="btn"
                         >Book Now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryMobileCard;