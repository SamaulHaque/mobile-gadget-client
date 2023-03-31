import React from 'react';
import Client1 from '../../../assets/Customers/Customer-1.jpg'
import Client2 from '../../../assets/Customers/Customer-2.jpg'
import Client3 from '../../../assets/Customers/Customer-3.jpg'
const AboutUs = () => {
    return (
        <div className='mx-5 mt-16' >
            <h2 className='text-4xl text-cyan-600 text-center font-bold mb-8'>What Clients Are Saying About Us</h2>
           <div className='grid grid-cols-1 md:grid-cols-3 text-center gap-4' data-aos="fade-up"
                    data-aos-easing="ease-out-cubic" data-aos-duration="1500">
           <div className="card bg-base-100 shadow">
           <figure className="px-10 pt-10">
                
                <div className="avatar">
                    <div className="w-24 rounded-full">
                    <img src={Client1} alt="img" className="avatar rounded-full w-24" />
                    </div>
                </div>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title font-bold">Abdul Aziz</h2>
                <p>The quality is excellent! They gave me a mobile phone that name of is Vivo 9. The quality of that phone is so excellent. They deliver it a very short time. I am very happy to buy a phone from them. I highly recommended.</p>
            </div>
            </div>
           <div className="card  bg-base-100 shadow">
           <figure className="px-10 pt-10">
                
                <div className="avatar">
                    <div className="w-24 rounded-full">
                    <img src={Client2} alt="img" className="avatar rounded-full w-24" />
                    </div>
                </div>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title font-bold">Mahfuz Alam</h2>
                <p>Low pricing but the quality is excellent! They gave me a mobile phone that name of is MI 8 Pro. The quality of that phone is so excellent. They deliver it a very short time. I am very happy to buy a phone from them.</p>
            </div>
            </div>
           <div className="card  bg-base-100 shadow">
            <figure className="px-10 pt-10">
                
                <div className="avatar">
                    <div className="w-24 rounded-full">
                    <img src={Client3} alt="img" className="avatar rounded-full w-24" />
                    </div>
                </div>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title font-bold">Sakib Mahmud</h2>
                <p>High quality Products. The quality is excellent! They gave me a mobile phone that name of is Oppo 10 Plus. The quality of that phone is so excellent. They deliver it a very short time. I am very happy to buy a phone from them.</p>
            </div>
            </div>
           </div>
        </div>
    );
};

export default AboutUs;