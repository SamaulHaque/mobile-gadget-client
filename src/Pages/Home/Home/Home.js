import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import Categories from '../../Categories/Categories';
import AdvertisedItems from '../../Shared/AdvertisedItems/AdvertisedItems';
import Banner from '../Banner/Banner';
import WeDeal from '../WeDeal/WeDeal';

const Home = () => {
    const {loading} = useContext(AuthContext)
    if(loading){
        return <h1 className='text-3xl text-secondary flex justify-center items-center font-bold mt-20'>L O A D I N G . . .</h1>
    }
    return (
        <div className=''>
            <Banner></Banner>
            <WeDeal></WeDeal>
            <Categories></Categories>
            <AdvertisedItems></AdvertisedItems>
        </div>
    );
};

export default Home;