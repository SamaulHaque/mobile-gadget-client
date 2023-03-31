import React from 'react';
import StoryPic from '../../../assets/Our story.jpg'

const OurStory = () => {
    return (
        <div className='mx-5'>
          <div className="hero ">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img src={StoryPic} className="max-w-sm rounded-lg shadow"  alt='img' data-aos="fade-up"
                    data-aos-easing="ease-out-cubic" data-aos-duration="1500"/>
             <div data-aos="fade-up"
                    data-aos-easing="ease-out-cubic" data-aos-duration="1500">
                <h1 className="text-4xl text-cyan-600 font-bold">About Our Story</h1>
                <p className="py-6 text-justify">Mobile gadget is a website for reselling used mobile phone. Many people used phones that can not sell for because of clients. In Mobile Gadget you can sell your used phone easily. In Mobile Gadget you can buy used phone easily.In deleniti eaque aut repudiandae et a id nisi. Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. Provident cupiditate voluptatem et in. Mobile gadget is a website for reselling used mobile phone.Many people used phones that can not sell for because of clients. In Mobile Gadget you can sell your used phone easily. In Mobile Gadget you can buy used phone easily. Mobile gadget is a website for reselling used mobile phone.Many people used phones that can not sell for because of clients. In Mobile Gadget you can sell your used phone easily. In Mobile Gadget you can buy used phone easily.</p>
             </div>
            </div>
          </div>
        </div>
    );
};

export default OurStory;