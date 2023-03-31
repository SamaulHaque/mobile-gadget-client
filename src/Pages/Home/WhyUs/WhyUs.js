import React from 'react';

const WhyUs = () => {
    return (
        <div className='my-12 mx-5'>
            <h2 className='text-4xl text-cyan-600 text-center font-bold mb-8'>Why Choose us</h2>
           <div className='grid grid-cols-1 md:grid-cols-3 gap-4 text-center'>
           <div className='bg-gray-600 py-8 rounded text-white text-3xl font-bold' data-aos="zoom-in"
                    data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                Huge Collection
            </div> 
            <div className='bg-gray-600 py-8 rounded text-white text-3xl font-bold' data-aos="zoom-in"
                    data-aos-easing="ease-out-cubic" data-aos-duration="1500">
                Best Quality
            </div>
            <div className='bg-gray-600 py-8 rounded text-white text-3xl font-bold' data-aos="zoom-in"
                    data-aos-easing="ease-out-cubic" data-aos-duration="1500">
                Low Pricing
            </div>
           </div>
        </div>
    );
};

export default WhyUs;