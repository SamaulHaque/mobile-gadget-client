import React from 'react';

const AdvertisedItemsCard = ({item}) => {
    console.log(item)
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                
            </div>
        </div>
    );
};

export default AdvertisedItemsCard;