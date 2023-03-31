import React from 'react';

const CategoryMobileCard = ({ mobile, setBookPhone}) => {
    const { title, img, location, resale_price, original_price, Used, posted_time, seller_name } = mobile;
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img src={img} alt="mobile-img" className='h-80' data-aos="fade-up"
        data-aos-easing="ease-out-cubic" data-aos-duration="1000" /></figure>
                <div className="card-body" data-aos="fade-up"
        data-aos-easing="ease-out-cubic" data-aos-duration="1000">
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
                         className="btn btn-accent"
                         >Book Now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryMobileCard;