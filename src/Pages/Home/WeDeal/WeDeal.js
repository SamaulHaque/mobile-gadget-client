import React from 'react';
import company1 from '../../../assets/company-logo-1.png';
import company2 from '../../../assets/company-logo-2.png';
import company3 from '../../../assets/company-logo-3.png';
import company4 from '../../../assets/company-logo-4.png';
import company5 from '../../../assets/company-logo-5.png';
import company6 from '../../../assets/company-logo-6.png';

const WeDeal = () => {
    return (
        <div className='mx-5'>
            <h2 className='text-4xl text-cyan-600 text-center font-bold'>We Deal In</h2>
            <div className='grid grid-cols-3 md:grid-cols-6 gap-4 items-center justify-items-center my-16'>
                <img className=' h-16' src={company1} alt="" />
                <img className=' h-16' src={company2} alt="" />
                <img className=' h-16' src={company3} alt="" />
                <img className=' h-32' src={company4} alt="" />
                <img className=' h-16' src={company5} alt="" />
                <img className=' h-24' src={company6} alt="" />
            </div>
        </div>
    );
};

export default WeDeal;