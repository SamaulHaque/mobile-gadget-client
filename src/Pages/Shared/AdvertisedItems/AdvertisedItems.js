import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import AdvertisedItemsCard from './AdvertisedItemsCard';

const AdvertisedItems = () => {
    const {loading} = useContext(AuthContext);
    
        const [advertisedItems, setAdvertisedItems] = useState('');
        useEffect(()=> {
            fetch(`https://mobile-gadget-server.vercel.app/advertises`)
                    .then(res => res.json())
                    .then(data => {
                        setAdvertisedItems(data)
                    })
        },[])

        if(loading){
            return <h1 className='text-3xl text-secondary flex justify-center items-center font-bold mt-20'>L O A D I N G . . .</h1>
        }

        
    return (
        <div>
            {/* <h2 className='text-4xl text-cyan-600 text-center font-bold mt-16'>Advertised Items</h2> */}
            {/* {
                advertisedItems.map(item => <AdvertisedItemsCard
                key={item._id}
                item={item}
                ></AdvertisedItemsCard>)
            } */}
        </div>
    );
};

export default AdvertisedItems;