import React from 'react';
import banner from '../../../assets/banner.png'

const Banner = () => {
    return (
        <div className="hero bg-purple-300 py-8">
            <div className="hero-content flex-col lg:flex-row">
                <img src={banner} alt='' className=" rounded-lg shadow-2xl w-1/2 h-96"/>
                <div className='px-8'>
                    <h2 className="text-3xl font-bold">Best Prices, Best</h2>
                    <h1 className='text-5xl font-bold'>Products, Buy Now!</h1>
                    
                </div>
            </div>
        </div>
    );
};

export default Banner;