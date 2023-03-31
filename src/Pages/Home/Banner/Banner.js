import React from 'react';
import banner from '../../../assets/banner.png'

const Banner = () => {
    return (
        <div className="hero bg-slate-200 py-8 mb-12">
            <div className="hero-content flex-col lg:flex-row">
                <img src={banner} alt='' className="  rounded-lg shadow-2xl sm:w-full lg:w-1/2 sm:h-1/2  lg:h-96" data-aos="fade-up"
                    data-aos-easing="ease-out-cubic" data-aos-duration="1500"/>
                <div className='' data-aos="fade-up"
                    data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                    <h2 className="text-3xl font-bold">Best Prices, Best</h2>
                    <h1 className='text-5xl font-bold'>Products, Buy Now!</h1>
                    
                </div>
            </div>
        </div>
    );
};

export default Banner;