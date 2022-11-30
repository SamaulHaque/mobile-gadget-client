import React from 'react';
import Categories from '../../Categories/Categories';
import Banner from '../Banner/Banner';
import WeDeal from '../WeDeal/WeDeal';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <WeDeal></WeDeal>
            <Categories></Categories>
        </div>
    );
};

export default Home;