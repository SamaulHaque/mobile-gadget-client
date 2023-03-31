import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import Categories from '../../Categories/Categories';
import AdvertisedItems from '../../Shared/AdvertisedItems/AdvertisedItems';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import OurStory from '../OurStory/OurStory';
import WeDeal from '../WeDeal/WeDeal';
import WhyUs from '../WhyUs/WhyUs';

const Home = () => {
    const {loading} = useContext(AuthContext)
    if(loading){
        return <h1 className='text-3xl text-secondary flex justify-center items-center font-bold mt-20'>L O A D I N G . . .</h1>
    }
    return (
        <div className=''>
            <Banner></Banner>
            <Categories></Categories>
            <WhyUs></WhyUs>
            <OurStory></OurStory>
            <WeDeal></WeDeal>
            <AboutUs></AboutUs>
            <AdvertisedItems></AdvertisedItems>
        </div>
    );
};

export default Home;